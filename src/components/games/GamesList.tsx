import { Game } from "@/types"

import GameCard from "./GameCard"

export default function GamesGrid({ games }: { games: Game[] | undefined }) {
	return (
		<>
			{games?.map((game) => (
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
