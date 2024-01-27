import React from "react"
import Image from "next/image"
import Link from "next/link"
import { CalendarIcon, StarIcon } from "lucide-react"

interface GameCardProps {
  slug: string
  name: string
  image: string | null
  rating: number | null
  released: string | null
}

export default function GameCard({
  slug,
  name,
  image,
  rating,
  released,
}: GameCardProps) {
  const formattedReleased = released
    ? new Date(released).toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null
  return (
    <Link href={`/game/${slug}`}>
      <div className="group w-full rounded-lg bg-[#202020] transition duration-200 ease-in-out">
        <div className="relative h-48 overflow-hidden rounded-t-lg md:h-36">
          <Image
            src={image ? image : "/placeholder.png"}
            alt={name}
            className="transition duration-300 ease-in-out group-hover:scale-110"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            width={300}
            height={0}
          />
        </div>
        <div className="p-3 ">
          <div className="flex w-full justify-between pb-2">
            <div className="flex items-center justify-center space-x-1">
              <CalendarIcon className="size-5 translate-y-[-1px]" />
              <p>{formattedReleased}</p>
            </div>
            {rating !== 0 && rating && (
              <div className="flex items-center justify-center space-x-1">
                <StarIcon className="size-5 translate-y-[-1px]" fill="white" />
                <p className="">{Math.round(rating * 10) / 10}</p>
              </div>
            )}
          </div>
          <h1 className="pb-2 text-2xl font-bold">{name}</h1>
        </div>
      </div>
    </Link>
  )
}
