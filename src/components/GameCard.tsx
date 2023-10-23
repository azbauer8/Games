import { FaRegCalendar, FaStar } from "react-icons/fa6";

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
            </div>
        </div>
    );
};

// Game cards should show: Cover image, Title, Rating, Released(?)
// Clicking on a game should expand its box showing additional info - description, release date, platforms, genres, etc.

export default GameCard;
