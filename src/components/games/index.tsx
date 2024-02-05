import GetGames from "@/utils/getGames"

import GamesList from "./GamesList"
import { LoadMore } from "./LoadMore"

async function loader(pageTitle: string, pageNum: number) {
  const data = await GetGames(pageTitle, pageNum)
  return data
}

export default async function Games({
  pageTitle,
}: {
  pageTitle: string
}) {
  const data = await loader(pageTitle, 1)
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <GamesList games={data?.results} />
      <LoadMore route={pageTitle} />
    </div>
  )
}
