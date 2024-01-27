"use client"

import { useEffect, useState } from "react"
import { Game } from "@/types"
import GetGames from "@/utils/getGames"
import { useInView } from "react-intersection-observer"

import GamesList from "./GamesList"

export function LoadMore({ route }: { route: string }) {
  const [games, setGames] = useState<Game[]>([])
  const [page, setPage] = useState(1)

  const { ref, inView } = useInView()

  const loadMoreGames = async () => {
    const nextPage = page + 1
    const newGames = await GetGames(route, nextPage)
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
      <div
        className="col-span-1 flex items-center justify-center p-4 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <div className="flex items-center justify-center">
          <div className="mt-10 rounded bg-white px-20 py-2 text-lg font-bold text-black hover:bg-neutral-300">
            Loading more...
          </div>
        </div>
      </div>
    </>
  )
}
