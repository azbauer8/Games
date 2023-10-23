import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

function BestOfLastYear() {
    const [games, setGames] = useState([]);

    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const currentDate = new Date();
    const dateStart = new Date(currentDate.getFullYear() - 1, 0, 1);
    const formattedDateStart = formatDate(dateStart);

    const dateEnd = new Date(currentDate.getFullYear() - 1, 11, 31);
    const formattedDateEnd = formatDate(dateEnd);

    useEffect(() => {
        console.log("fetching games...");
        axios
            .get(
                `https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&key=${
                    import.meta.env.VITE_RAWG_API_KEY
                }`
            )
            .then((data) => {
                console.log(data.data.results);
                setGames(data.data.results);
            });
    }, [formattedDateEnd, formattedDateStart]);

    return (
        <main className="p-4 sm:mt-6">
            <div className="pb-5">
                <h1 className="text-7xl font-bold pb-5">Best of last year</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {games.map((item, i) => {
                    return (
                        <GameCard
                            key={i}
                            name={item["name"]}
                            image={item["background_image"]}
                            rating={item["rating"]}
                            released={item["released"]}
                        />
                    );
                })}{" "}
            </div>
        </main>
    );
}

export default BestOfLastYear;
