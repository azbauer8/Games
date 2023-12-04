import { FaRegCalendar, FaStar } from "react-icons/fa6";
import Image from "next/image";
import placeholder from "../public/placeholder.png";
import React from "react";

interface GameCardProps {
  slug: string;
  name: string;
  image: string;
  rating: number;
  released: string;
}

const GameCard: React.FC<GameCardProps> = React.memo(
  ({ slug, name, image, rating, released }) => {
    const formattedReleased = new Date(released).toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    return (
      <a href={`https://rawg.io/games/${slug}`}>
        <div className="bg-[#202020] rounded-lg w-full transform transition duration-200 ease-in-out hover:scale-105">
          <div className="h-52 relative">
            <Image
              src={image ? image : placeholder}
              alt={name}
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="rounded-t-lg"
            />
          </div>
          <div className="p-3 ">
            <div className="pb-2 w-full flex justify-between">
              <div className="flex justify-center items-center space-x-1">
                <FaRegCalendar className="align-middle" />
                <p>{formattedReleased}</p>
              </div>
              <div className="flex justify-center items-center space-x-1">
                <FaStar className="align-middle" />
                <p className="">{Math.round(rating * 10) / 10}</p>
              </div>
            </div>
            <h1 className="pb-2 text-2xl font-bold">{name}</h1>
          </div>
        </div>
      </a>
    );
  }
);

GameCard.displayName = "GameCard";

export default GameCard;
