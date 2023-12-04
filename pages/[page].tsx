import { useRouter } from "next/router";
import Games from "@/components/pages/Games";
import NotFound from "@/components/pages/Not-Found";

const pages = [
  "TopPicks",
  "Last30Days",
  "ThisPastWeek",
  "NextWeek",
  "ThisMonth",
  "BestOfThisYear",
  "BestOfLastYear",
  "AllTimeBest",
];

function insertSpaces(string: string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/(\d+)([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/([a-z]+)(\d+)/gi, "$1 $2");
}

export default function Page() {
  const router = useRouter();
  let currentPage = router.query.page as string;
  if (!currentPage) {
    currentPage = "TopPicks";
  }
  const pageTitle = insertSpaces(currentPage);

  if (pages.includes(currentPage)) {
    return <Games currentPage={currentPage} pageTitle={pageTitle} />;
  }
  return <NotFound />;
}
