import fetchApi from "@/lib/fetchApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import GameCard from "@/components/GameCard";

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
  let pageNum = 1;
  const { isSuccess, isLoading, data } = useQuery({
    queryKey: [{ currentPage, pageNum }],
    queryFn: () => fetchApi(currentPage, pageNum),
    enabled: pages.includes(currentPage),
  });
  isSuccess && console.log(data);

  return (
    <>
      {pages.includes(currentPage) ? (
        <>
          <div className="pb-5 space-y-2">
            <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
              {pageTitle}
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {isSuccess
              ? data.results.map((item: any, index: number) => (
                  <div key={index}>
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
