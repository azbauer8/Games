import { FaRegCalendar, FaStar } from "react-icons/fa6";
import Image from "next/image";
import placeholder from "../public/placeholder.png";

interface GameCardProps {
  name: string;
  image: string;
  rating: number;
  released: string;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  image,
  rating,
  released,
}) => {
  const formattedReleased = new Date(released).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-[#202020] rounded-lg">
      <Image
        src={image !== null ? image : placeholder}
        alt={name}
        width={870}
        height={1160}
        placeholder="empty"
        className="object-contain h-auto max-w-full rounded-t-lg"
      />
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
  );
};

export default GameCard;
