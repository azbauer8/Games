import { Games } from "@/types"

import GameCard from "./GameCard"

export default function GamesList({ games }: { games: Games[] | undefined }) {
  return (
    <>
      {games &&
        games.map((game) => (
          <GameCard
            key={game.slug}
            slug={game.slug}
            name={game.name}
            image={game.background_image}
            rating={game.rating}
            released={game.released}
          />
        ))}
    </>
  )
}
