import GamesList from "@/routes/GamesList";
import Head from "next/head";

// seemingly no way to catch the index in a dynamic route, so have to manually render this one
export default function Home() {
  return (
    <>
      <Head>
        <title>Top Picks</title>
      </Head>
      <GamesList currentPage="TopPicks" pageTitle="Top Picks" />
    </>
  );
}
