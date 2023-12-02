import globalState from "@/lib/globalState";
import fetchApi from "@/lib/fetchApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import GameCard from "@/components/GameCard";
import { useEffect, useState } from "react";

const pages = [
  "TopPicks",
  "Last30Days",
  "ThisPastWeek",
  "NextWeek",
  "ThisMonth",
  "BestOfThisYear",
  "BestOfLastYear",
  "AllTimeBest",
];

function insertSpaces(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d+)([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z]+)(\d+)/gi, "$1 $2");
}

export default function Games() {
  const router = useRouter();
  const currentPage = router.query.page as string;
  const pageTitle =
    (currentPage && insertSpaces(currentPage)) || insertSpaces("TopPicks");
  const { pageNum, setPageNum } = globalState();
  const [fetchedData, setFetchedData] = useState<any[]>([]);
  const { isSuccess, isLoading, data, refetch } = useQuery({
    queryKey: [{ currentPage, pageNum }],
    queryFn: () => fetchApi(currentPage, pageNum),
    enabled: pages.includes(currentPage),
  });

  // Update fetchedData when data changes
  useEffect(() => {
    console.log(pageNum);
    console.log("use effect running");
    if (isSuccess && data) {
      setFetchedData((prevData) => [...prevData, ...data.results]);
    }
  }, [isSuccess, data, pageNum]);

  // Function to handle 'Load More' button click
  const handleLoadMore = () => {
    if (fetchedData.length > 0) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(1);
      setFetchedData(data.results);
    }
  };

  // Reset fetchedData pageNum to 1 when the route changes
  useEffect(() => {
    setFetchedData([]);
    setPageNum(1);
  }, [router.asPath, setPageNum]);

  console.log("data", data, "fetched data", fetchedData, "page", pageNum);

  return (
    <>
      {pages.includes(currentPage) ? (
        <>
          <div className="pb-5 space-y-2">
            <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
              {pageTitle}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-10">
            {isSuccess && fetchedData
              ? fetchedData.map((item: any, index: number) => (
                  <div key={item["slug"] + index}>
                    <GameCard
                      key={index}
                      slug={item["slug"]}
                      name={item["name"]}
                      image={item["background_image"]}
                      rating={item["rating"]}
                      released={item["released"]}
                    />
                  </div>
                ))
              : null}
          </div>
          {isSuccess && data.next ? (
            <div className="flex items-center justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-white hover:bg-neutral-300 text-black text-lg font-bold py-2 px-20 rounded"
              >
                Load More
              </button>
            </div>
          ) : null}
        </>
      ) : !currentPage ? (
        <div className="pb-5 space-y-2">
          <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
            Top Picks
          </h1>
        </div>
      ) : null}
    </>
  );
}
