import Head from "next/head";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function GameInfo({ data, imgs }: any) {
  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="mb-20">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-5 lg:items-center">
          <Image
            src={data.background_image}
            alt={data.name}
            className="rounded-lg mx-auto lg:w-1/2 lg:mx-0"
            width={1280}
            height={720}
            priority
          />
          <div className="space-y-4">
            <h1 className="text-4xl font-bold mt-4">{data.name}</h1>

            <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
              <div className="bg-neutral-800 rounded-lg my-2 p-3 space-y-2 md:w-1/2">
                <p>
                  <b>Rating: </b>{" "}
                  {data.ratings_count > 0 ? data.rating : "No data"}
                </p>
                <p>
                  <b>Release Date: </b> {formatDate(data.released)}
                </p>
                <p className="font-bold">Platforms: </p>
                <div className="flex gap-1 flex-wrap items-center">
                  {data.platforms.length > 0
                    ? data.platforms.map((p: any) => (
                        <Badge key={p.platform.name}>{p.platform.name}</Badge>
                      ))
                    : "No data"}
                </div>
                <p className="font-bold">Genres:</p>
                <div className="flex gap-1 flex-wrap">
                  {data.genres.map((genre: any) => (
                    <Badge key={genre.name} className="hover:bg-current">
                      {genre.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="bg-neutral-800 rounded-lg my-2 p-3 space-y-2 md:w-1/2">
                <p className="font-bold">Developers: </p>
                <div className="flex gap-1 flex-wrap items-center">
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
                <div className="flex gap-1 flex-wrap items-center">
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
            <Button variant="ghost" className="w-full mx-auto my-2 mb-4 py-6">
              <a href={data.website}>Link</a>
            </Button>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="my-4 rounded-lg max-w-6xl mx-auto"
        />
        <h1 className="text-3xl font-bold mb-5 w-10/12 mx-auto text-center">
          Screenshots
        </h1>

        <Carousel
          opts={{
            loop: true,
          }}
          className="w-10/12 mx-auto"
        >
          <CarouselContent>
            {imgs.results.map((img: any) => (
              <CarouselItem key={img.id}>
                <Image
                  src={img.image}
                  alt={img.id}
                  className="rounded-lg"
                  width={1280}
                  height={720}
                  priority
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
