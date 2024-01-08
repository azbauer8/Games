import Head from "next/head"
import { useRouter } from "next/router"
import GamesList from "@/routes/GamesList"
import NotFound from "@/routes/Not-Found"

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

export default function Page() {
  const router = useRouter()
  const currentPage = router.query.page as string

  if (pages.includes(currentPage)) {
    const pageTitle = insertSpaces(currentPage)
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <GamesList currentPage={currentPage} pageTitle={pageTitle} />
      </>
    )
  }
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <NotFound />
    </>
  )
}
