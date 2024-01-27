import GetGames from "@/utils/getGames"

import GamesList from "./GamesList"
import { LoadMore } from "./LoadMore"

async function loader(pageTitle: string, pageNum: number) {
  const data = await GetGames(pageTitle, pageNum)
  return data
}

export default async function Games({
  currentPage,
  pageTitle,
}: {
  currentPage: string
  pageTitle: string
}) {
  const data = await loader(currentPage, 1)
  return (
    <>
      <div className="space-y-2 pb-5">
        <h1 className="text-center text-4xl font-bold md:pb-5 md:text-left md:text-7xl">
          {pageTitle}
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <GamesList games={data?.results} />
        <LoadMore route={currentPage} />
      </div>
    </>
  )
}
