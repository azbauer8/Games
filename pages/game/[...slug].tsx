import Loader from "@/components/ui/loader";
import GameInfo from "@/routes/GameInfo";
import NotFound from "@/routes/Not-Found";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const slug = router.query.slug?.length === 1 ? router.query.slug[0] : "";
  const { isSuccess: gameSuccess, data: gameData } = useQuery({
    queryKey: [slug],
    queryFn: () => fetchData(slug),
    enabled: slug !== "",
  });
  const { isSuccess: imgSuccess, data: imgData } = useQuery({
    queryKey: [slug + "img"],
    queryFn: () => fetchImgs(slug),
    enabled: slug !== "",
  });

  if (gameSuccess && gameData && imgSuccess && imgData) {
    return <GameInfo data={gameData} imgs={imgData} />;
  }

  if (gameSuccess && !gameData) return <NotFound />;

  return <Loader />;
}

async function fetchData(slug: string) {
  try {
    const response = await fetch(`/api/game-info/${slug}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching game data:", error);
    return null;
  }
}

async function fetchImgs(slug: string) {
  try {
    const response = await fetch(`/api/screenshots/${slug}`);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching game screenshots:", error);
    return null;
  }
}
