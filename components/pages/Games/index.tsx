import { useInfiniteQuery } from "@tanstack/react-query";
import GameCard from "@/components/pages/Games/GameCard";
import Loader from "@/components/ui/loader";
import { useEffect } from "react";

async function fetchApi(pageTitle: string, pageNum: number) {
  try {
    const response = await fetch(`/api/${pageTitle}/${pageNum}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching game data:", error);
    return;
  }
}

export default function Games({
  currentPage,
  pageTitle,
}: {
  currentPage: string;
  pageTitle: string;
}) {
  const {
    data,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [currentPage],
    queryFn: ({ pageParam }) => fetchApi(currentPage, pageParam),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.next) {
        const nextPage = lastPage.next.slice(-1);
        return nextPage;
      } else {
        return undefined;
      }
    },
    initialPageParam: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (bottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <>
      <div className="pb-5 space-y-2">
        <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
          {pageTitle}
        </h1>
      </div>

      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.pages.map((page) =>
            page.results.map((item: any) => (
              <GameCard
                key={item["slug"]}
                slug={item["slug"]}
                name={item["name"]}
                image={item["background_image"]}
                rating={item["rating"]}
                released={item["released"]}
              />
            ))
          )}
        </div>
      ) : null}

      {isFetchingNextPage && (
        <div className="flex items-center justify-center">
          <div className="bg-white hover:bg-neutral-300 text-black text-lg font-bold py-2 px-20 rounded mt-10">
            Loading more...
          </div>
        </div>
      )}
    </>
  );
}
