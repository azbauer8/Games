import globalState from "@/lib/globalState";
import fetchApi from "@/lib/fetchApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import GameCard from "@/components/GameCard";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

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
  // Get the current page from the router
  const router = useRouter();
  const currentPage = router.query.page as string;
  const pageTitle =
    (currentPage && insertSpaces(currentPage)) || insertSpaces("TopPicks");

  const { pageNum, setPageNum } = globalState();
  // State to store fetched data so new data can be added on
  const [fetchedData, setFetchedData] = useState<any[]>([]);

  // Reset fetchedData and set pageNum to 1 when the route changes
  useEffect(() => {
    setFetchedData([]);
    setPageNum(1);
  }, [router.asPath, setPageNum]);

  // Fetch data for the current page
  const { isSuccess, isLoading, data, refetch } = useQuery({
    // refetches data when page and pageNum change
    queryKey: [{ currentPage, pageNum }],
    queryFn: () => fetchApi(currentPage, pageNum),
    // only runs on valid pages
    enabled: pages.includes(currentPage),
  });

  // Update fetchedData when data changes
  useEffect(() => {
    if (isSuccess) {
      setFetchedData((prevData) => [...prevData, ...data.results]);
    }
  }, [isSuccess, data]);

  // Function to handle 'Load More' button click
  const handleLoadMore = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <>
      {pages.includes(currentPage) ? (
        <>
          <div className="pb-5 space-y-2">
            <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
              {pageTitle}
            </h1>
          </div>
          {isLoading ? (
            <Loader />
          ) : isSuccess && fetchedData ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {fetchedData.map((item: any, index: number) => (
                <GameCard
                  key={item["slug"]}
                  slug={item["slug"]}
                  name={item["name"]}
                  image={item["background_image"]}
                  rating={item["rating"]}
                  released={item["released"]}
                />
              ))}
            </div>
          ) : null}
          {data && data.next ? (
            <div className="flex items-center justify-center">
              <button
                onClick={handleLoadMore}
                className="bg-white hover:bg-neutral-300 text-black text-lg font-bold py-2 px-20 rounded mt-10"
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
      ) : (
        <div className="pb-5 space-y-2">
          <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
            {`You're lost, partner`}
          </h1>
        </div>
      )}
    </>
  );
}
