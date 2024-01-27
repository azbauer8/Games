"use client"

import { useEffect, useState } from "react"
import { Game } from "@/types"
import GetGames from "@/utils/getGames"
import { useInView } from "react-intersection-observer"

import GamesList from "./GamesList"

export function LoadMore({ route }: { route: string }) {
  const [games, setGames] = useState<Game[]>([])
  const [page, setPage] = useState(1)
  const [morePages, setMorePages] = useState(true)

  const { ref, inView } = useInView()

  const loadMoreGames = async () => {
    const nextPage = page + 1
    const newGames = await GetGames(route, nextPage)
    newGames?.next ? setMorePages(true) : setMorePages(false)
    newGames?.results &&
      setGames((prevProducts: Game[]) => [...prevProducts, ...newGames.results])
    setPage(nextPage)
  }

  useEffect(() => {
    if (inView) {
      loadMoreGames()
    }
  }, [inView])

  return (
    <>
      <GamesList games={games} />
      {morePages && (
        <div
          className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 lg:col-span-3 xl:col-span-4 2xl:col-span-5"
          ref={ref}
        >
          <div className="rounded bg-primary px-20 py-2 text-lg font-bold text-primary-foreground">
            Loading more...
          </div>
        </div>
      )}
    </>
  )
}
