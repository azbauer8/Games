import { notFound } from "next/navigation"

import GamesList from "@/components/games"
import Loader from "@/components/ui/loader"
import { Suspense } from "react"

const pages = [
	"Trending",
	"Last30Days",
	"ThisPastWeek",
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
				<div className="space-y-2 pb-5">
					<h1 className="text-center text-4xl font-bold md:pb-5 md:text-left md:text-7xl">
						{pageTitle}
					</h1>
				</div>
				<Suspense fallback={<Loader />}>
					<GamesList pageTitle={params.title} />
				</Suspense>
			</>
		)
	}

	return notFound()
}
