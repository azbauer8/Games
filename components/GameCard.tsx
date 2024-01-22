import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Icon } from "@iconify/react"

import placeholder from "../public/placeholder.png"

interface GameCardProps {
  slug: string
  name: string
  image: string
  rating: number
  released: string
}

const GameCard: React.FC<GameCardProps> = React.memo(
  ({ slug, name, image, rating, released }) => {
    const formattedReleased = new Date(released).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })

    console.log(image)

    return (
      <Link href={`/game/${slug}`}>
        <div className="group w-full rounded-lg bg-[#202020] transition duration-200 ease-in-out">
          <div className="relative h-48 overflow-hidden rounded-t-lg md:h-36">
            <Image
              src={image ? image : placeholder}
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
              priority
              // fill
              // layout="fill"
              width={300}
              height={0}
              quality={30}
            />
          </div>
          <div className="p-3 ">
            <div className="flex w-full justify-between pb-2">
              <div className="flex items-center justify-center space-x-1">
                <Icon icon="fa6-regular:calendar" className="align-middle" />
                <p>{formattedReleased}</p>
              </div>
              <div className="flex items-center justify-center space-x-1">
                <Icon icon="fa6-solid:star" className="align-middle" />
                <p className="">{Math.round(rating * 10) / 10}</p>
              </div>
            </div>
            <h1 className="pb-2 text-2xl font-bold">{name}</h1>
          </div>
        </div>
      </Link>
    )
  }
)

GameCard.displayName = "GameCard"

export default GameCard
