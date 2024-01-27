import { GameImg, GameInfo } from "@/types"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

async function loader(slug: string) {
	const info = await fetch(
		`https://api.rawg.io/api/games/${slug}?key=${process.env.RAWG_API}`,
	).then(async (res) => await res.json())
	const imgs = await fetch(
		`https://api.rawg.io/api/games/${slug}/screenshots?key=${process.env.RAWG_API}`,
	).then(async (res) => await res.json())
	return { info: info as GameInfo, imgs: imgs.results as GameImg[] }
}

function formatDate(date: string) {
	return new Date(date).toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric",
	})
}

export default async function Game({ params }: { params: { slug: string } }) {
	const data = await loader(params.slug)
	return (
		<div className="mb-20">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-5">
				<div>
					<img
						src={data.info.background_image}
						alt={data.info.name}
						className="mx-auto rounded-lg lg:mx-0 lg:w-1/2"
						width={800}
						height={0}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
							height: "100%",
							maxWidth: "100%",
							maxHeight: "100%",
						}}
					/>
				</div>
				<div className="space-y-4">
					<h1 className="mt-4 text-4xl font-bold">{data.info.name}</h1>

					<div className="flex flex-col md:flex-row md:justify-between md:gap-5">
						<div className="my-2 space-y-2 rounded-lg bg-neutral-800 p-3 md:w-1/2">
							<p>
								<b>Rating: </b>{" "}
								{data.info.ratings_count > 0 ? data.info.rating : "No data"}
							</p>
							<p>
								<b>Release Date: </b> {formatDate(data.info.released)}
							</p>
							<p className="font-bold">Platforms: </p>
							<div className="flex flex-wrap items-center gap-1">
								{data.info.platforms.length > 0
									? data.info.platforms.map((p) => (
											<Badge key={p.platform.name}>{p.platform.name}</Badge>
									  ))
									: "No data"}
							</div>
							<p className="font-bold">Genres:</p>
							<div className="flex flex-wrap gap-1">
								{data.info.genres.map((genre) => (
									<Badge key={genre.name} className="hover:bg-current">
										{genre.name}
									</Badge>
								))}
							</div>
						</div>
						<div className="my-2 space-y-2 rounded-lg bg-neutral-800 p-3 md:w-1/2">
							<p className="font-bold">Developers: </p>
							<div className="flex flex-wrap items-center gap-1">
								{data.info.developers.length > 0
									? data.info.developers.map((dev, index: number) => (
											<span key={dev.name}>
												{dev.name}
												{data.info.developers.length > 1 &&
													index !== data.info.developers.length - 1 &&
													", "}
											</span>
									  ))
									: "No data"}
							</div>
							<p className="font-bold">Publishers: </p>
							<div className="flex flex-wrap items-center gap-1">
								{data.info.publishers.length > 0
									? data.info.publishers.map((pub, index: number) => (
											<span key={pub.name}>
												{pub.name}
												{data.info.publishers.length > 1 &&
													index !== data.info.publishers.length - 1 &&
													", "}
											</span>
									  ))
									: "No data"}
							</div>
						</div>
					</div>
					<Button variant="outline" className="mx-auto my-2 mb-4 w-full py-6">
						<a href={data.info.website}>Link</a>
					</Button>
				</div>
			</div>
			<div
				// biome-ignore lint/security/noDangerouslySetInnerHtml: I don't know any other way to do this. The data is coming from a trusted api so I think it's fine.
				dangerouslySetInnerHTML={{ __html: data.info.description }}
				className="mx-auto my-4 max-w-6xl rounded-lg"
			/>
			<h1 className="mx-auto mb-5 w-10/12 text-center text-3xl font-bold">
				Screenshots
			</h1>

			<Carousel
				opts={{
					loop: true,
				}}
				className="mx-auto w-10/12"
			>
				<CarouselContent>
					{data.imgs.map((img) => (
						<CarouselItem key={img.id}>
							<img
								src={img.image}
								alt={img.id.toString()}
								className="rounded-lg"
								width={800}
								height={0}
								style={{
									objectFit: "cover",
									objectPosition: "center",
									width: "100%",
									height: "100%",
									maxWidth: "100%",
									maxHeight: "100%",
								}}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
