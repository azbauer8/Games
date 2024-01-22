import Head from "next/head"
import Image from "next/image"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function GameInfo({ data, imgs }: any) {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-5">
          <div>
            <Image
              src={data.background_image}
              alt={data.name}
              className="mx-auto rounded-lg lg:mx-0 lg:w-1/2"
              priority
              width={800}
              height={0}
              quality={50}
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
            <h1 className="mt-4 text-4xl font-bold">{data.name}</h1>

            <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
              <div className="my-2 space-y-2 rounded-lg bg-neutral-800 p-3 md:w-1/2">
                <p>
                  <b>Rating: </b>{" "}
                  {data.ratings_count > 0 ? data.rating : "No data"}
                </p>
                <p>
                  <b>Release Date: </b> {formatDate(data.released)}
                </p>
                <p className="font-bold">Platforms: </p>
                <div className="flex flex-wrap items-center gap-1">
                  {data.platforms.length > 0
                    ? data.platforms.map((p: any) => (
                        <Badge key={p.platform.name}>{p.platform.name}</Badge>
                      ))
                    : "No data"}
                </div>
                <p className="font-bold">Genres:</p>
                <div className="flex flex-wrap gap-1">
                  {data.genres.map((genre: any) => (
                    <Badge key={genre.name} className="hover:bg-current">
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="my-2 space-y-2 rounded-lg bg-neutral-800 p-3 md:w-1/2">
                <p className="font-bold">Developers: </p>
                <div className="flex flex-wrap items-center gap-1">
                  {data.developers.length > 0
                    ? data.developers.map((dev: any, index: number) => (
                        <span key={dev.name}>
                          {dev.name}
                          {data.developers.length > 1 &&
                            index !== data.developers.length - 1 &&
                            ", "}
                        </span>
                      ))
                    : "No data"}
                </div>
                <p className="font-bold">Publishers: </p>
                <div className="flex flex-wrap items-center gap-1">
                  {data.publishers.length > 0
                    ? data.publishers.map((pub: any, index: number) => (
                        <span key={pub.name}>
                          {pub.name}
                          {data.publishers.length > 1 &&
                            index !== data.publishers.length - 1 &&
                            ", "}
                        </span>
                      ))
                    : "No data"}
                </div>
              </div>
            </div>
            <Button variant="ghost" className="mx-auto my-2 mb-4 w-full py-6">
              <a href={data.website}>Link</a>
            </Button>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
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
            {imgs.results.map((img: any, index: number) => (
              <CarouselItem key={img.id}>
                <Image
                  src={img.image}
                  alt={img.id}
                  className="rounded-lg"
                  priority={index === 0}
                  width={800}
                  height={0}
                  quality={80}
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
    </>
  )
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
