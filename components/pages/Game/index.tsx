import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Game({ data, imgs }: any) {
  return (
    <div className="mb-20">
      <img src={data.background_image} alt={data.name} className="rounded-lg" />
      <h1 className="text-4xl font-bold mt-2">{data.name}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: data.description }}
        className="my-4 rounded-lg"
      />
      <div className="my-3 space-y-2">
        <p className="font-bold">Genres:</p>
        <div className="flex gap-1 flex-wrap">
          {data.genres.map((genre: any) => (
            <Badge key={genre.name} className="hover:bg-current">
              {genre.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:gap-5">
        <div className="bg-neutral-800 rounded-lg my-2 p-3 space-y-2 md:w-1/2">
          <p>
            <b>Rating: </b> {data.rating}
          </p>
          <p>
            <b>Release Date: </b> {formatDate(data.released)}
          </p>
          <p className="font-bold">Platforms: </p>
          <div className="flex gap-1 flex-wrap items-center">
            {data.platforms.map((p: any) => (
              <Badge key={p.platform.name}>{p.platform.name}</Badge>
            ))}
          </div>
        </div>
        <div className="bg-neutral-800 rounded-lg my-2 p-3 space-y-2 md:w-1/2">
          <p className="font-bold">Developers: </p>
          <div className="flex gap-1 flex-wrap items-center">
            {data.developers.map((dev: any, index: number) => (
              <span key={dev.name}>
                {dev.name}
                {data.developers.length > 1 &&
                  index !== data.developers.length - 1 &&
                  ", "}
              </span>
            ))}
          </div>
          <p className="font-bold">Publishers: </p>
          <div className="flex gap-1 flex-wrap items-center">
            {data.publishers.map((pub: any, index: number) => (
              <span key={pub.name}>
                {pub.name}
                {data.publishers.length > 1 &&
                  index !== data.publishers.length - 1 &&
                  ", "}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Button variant="ghost" className="w-full my-2 mb-4 py-6">
        <a href={data.website}>Official Website</a>
      </Button>
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
              <img src={img.image} alt={img.id} className="rounded-lg" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
