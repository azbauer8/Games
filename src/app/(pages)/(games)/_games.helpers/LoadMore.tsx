"use client"

import { useEffect, useState } from "react"
import { Game } from "@/types"
import { useInView } from "react-intersection-observer"

import Loader from "@/components/Loader"

import GamesList from "./GamesList"
import getGames from "./getGames"

export function LoadMore({ route }: { route: string }) {
  const [games, setGames] = useState<Game[]>([])
  const [page, setPage] = useState(1)
  const [morePages, setMorePages] = useState(true)

  const { ref, inView } = useInView()

  const loadMoreGames = async () => {
    const nextPage = page + 1
    const newGames = await getGames(route, nextPage)
    newGames?.next ? setMorePages(true) : setMorePages(false)
    newGames?.results &&
      setGames((prevProducts: Game[]) => [...prevProducts, ...newGames.results])
    setPage(nextPage)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: including loadMoreGames in dep array causes double fetch
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
          <Loader />
        </div>
      )}
    </>
  )
}
