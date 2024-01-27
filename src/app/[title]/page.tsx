import Head from "next/head"
import { notFound } from "next/navigation"

import GamesList from "@/components/games"

const pages = [
  "Last30Days",
  "ThisPastWeek",
  "NextWeek",
  "ThisMonth",
  "BestOfThisYear",
  "BestOfLastYear",
  "AllTimeBest",
]

function insertSpaces(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d+)([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z]+)(\d+)/gi, "$1 $2")
}

export default function Page({ params }: { params: { title: string } }) {
  if (pages.includes(params.title)) {
    const pageTitle = insertSpaces(params.title)
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <GamesList currentPage={params.title} pageTitle={pageTitle} />
      </>
    )
  }

  return notFound()
}
