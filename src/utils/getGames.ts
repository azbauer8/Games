"use server"

import { GameResponse } from "@/types"

export default async function GetGames(pageTitle: string, pageNum: number) {
	let formattedDateStart = ""
	let formattedDateEnd = ""
	const currentDate = new Date()
	const dateStart = new Date(currentDate)
	const dateEnd = new Date(currentDate)

	if (pageTitle === "TopPicks") {
		const dateRange = 90
		dateStart.setDate(currentDate.getDate() - dateRange)
		formattedDateStart = formatDate(dateStart)
		dateEnd.setDate(currentDate.getDate() + dateRange)
		formattedDateEnd = formatDate(dateEnd)
	} else if (pageTitle === "Last30Days") {
		const dateRange = 30
		dateStart.setDate(currentDate.getDate() - dateRange)
		formattedDateStart = formatDate(dateStart)
		formattedDateEnd = formatDate(dateEnd)
	} else if (pageTitle === "ThisPastWeek") {
		const dateRange = 7
		dateStart.setDate(currentDate.getDate() - dateRange)
		formattedDateStart = formatDate(dateStart)
		formattedDateEnd = formatDate(dateEnd)
	} else if (pageTitle === "NextWeek") {
		const dateRange = 7
		dateEnd.setDate(currentDate.getDate() + dateRange)
		formattedDateStart = formatDate(dateStart)
		formattedDateEnd = formatDate(dateEnd)
	} else if (pageTitle === "ThisMonth") {
		const monthStart = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			1,
		)
		formattedDateStart = formatDate(monthStart)
		const monthEnd = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth() + 1,
			0,
		)
		formattedDateEnd = formatDate(monthEnd)
	} else if (pageTitle === "BestOfThisYear") {
		const yearStart = new Date(currentDate.getFullYear(), 0, 1)
		formattedDateStart = formatDate(yearStart)
		const yearEnd = new Date(currentDate.getFullYear(), 11, 31)
		formattedDateEnd = formatDate(yearEnd)
	} else if (pageTitle === "BestOfLastYear") {
		const dateStart = new Date(currentDate.getFullYear() - 1, 0, 1)
		formattedDateStart = formatDate(dateStart)
		const dateEnd = new Date(currentDate.getFullYear() - 1, 11, 31)
		formattedDateEnd = formatDate(dateEnd)
	} else if (pageTitle === "AllTimeBest") {
		formattedDateStart = "1970-01-01"
		formattedDateEnd = formatDate(currentDate)
	} else {
		return
	}
	const res: GameResponse = await fetch(
		`https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&page=${pageNum}&key=${process.env.RAWG_API}`,
	).then(async (res) => await res.json())
	return res
}

function formatDate(date: Date) {
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, "0")
	const day = String(date.getDate()).padStart(2, "0")
	return `${year}-${month}-${day}`
}
