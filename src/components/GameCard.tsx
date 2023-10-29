import {
  FaRegCalendar,
  FaStar,
  FaComputer,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAppStoreIos,
} from "react-icons/fa6";
import { BsNintendoSwitch } from "react-icons/bs";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface PlatformObject {
  platform: Platform;
  Prototype: object;
}

interface GameCardProps {
  name: string;
  image: string;
  rating: number;
  released: string;
  platforms: Array<PlatformObject>;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  image,
  rating,
  released,
  platforms,
}) => {
  const formattedReleased = new Date(released).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-[#202020] rounded-lg">
      <img src={image} alt={name} className="rounded-t-lg" />
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
        <div className="py-1 w-full flex justify-between">
          <div className="flex justify-center items-center space-x-2">
            {platforms.map((item, i) =>
              item.platform.slug === "xbox-one" ? (
                <FaXbox key={i} className="align-middle" />
              ) : item.platform.slug === "xbox-series-x" ? (
                <FaXbox key={i} className="align-middle" />
              ) : item.platform.slug === "playstation4" ? (
                <FaPlaystation key={i} className="align-middle" />
              ) : item.platform.slug === "playstation5" ? (
                <FaPlaystation key={i} className="align-middle" />
              ) : item.platform.slug === "nintendo-switch" ? (
                <BsNintendoSwitch key={i} className="align-middle" />
              ) : item.platform.slug === "pc" ? (
                <FaComputer key={i} className="align-middle" />
              ) : item.platform.slug === "macos" ? (
                <FaApple key={i} className="align-middle" />
              ) : item.platform.slug === "linux" ? (
                <FaLinux key={i} className="align-middle" />
              ) : item.platform.slug === "ios" ? (
                <FaAppStoreIos key={i} className="align-middle" />
              ) : (
                <p key={i}>{item.platform.slug}</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Game cards should show: Cover image, Title, Rating, Released(?)
// Clicking on a game should expand its box showing additional info - description, release date, platforms, genres, etc.

export default GameCard;
