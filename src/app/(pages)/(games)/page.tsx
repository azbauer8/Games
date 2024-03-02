import { Suspense } from "react"

import Loader from "@/components/Loader"

import GamesWrapper from "./_games.helpers/GamesWrapper"

export default function Home() {
  return (
    <>
      <div className="space-y-2 pb-5">
        <h1 className="text-center text-4xl font-bold md:pb-5 md:text-left md:text-7xl">
          Trending
        </h1>
      </div>
      <Suspense fallback={<Loader />}>
        <GamesWrapper pageTitle="Trending" />
      </Suspense>
    </>
  )
}
