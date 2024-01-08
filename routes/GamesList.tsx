import { useEffect } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"

import Loader from "@/components/ui/loader"
import GameCard from "@/components/GameCard"

async function fetchApi(pageTitle: string, pageNum: number) {
  try {
    const response = await fetch(`/api/games-list/${pageTitle}/${pageNum}`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching game data:", error)
    return
  }
}

export default function GamesList({
  currentPage,
  pageTitle,
}: {
  currentPage: string
  pageTitle: string
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
        const nextPage = lastPage.next.slice(-1)
        return nextPage
      } else {
        return undefined
      }
    },
    initialPageParam: 1,
  })

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight

      if (bottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage()
      }
    }
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <>
      <div className="space-y-2 pb-5">
        <h1 className="text-center text-4xl font-bold md:pb-5 md:text-left md:text-7xl">
          {pageTitle}
        </h1>
      </div>

      {isLoading ? (
        <Loader />
      ) : isSuccess ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
          <div className="mt-10 rounded bg-white px-20 py-2 text-lg font-bold text-black hover:bg-neutral-300">
            Loading more...
          </div>
        </div>
      )}
    </>
  )
}
