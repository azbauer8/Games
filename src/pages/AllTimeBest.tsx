import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

function AllTimeBest() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        console.log("fetching games...");
        axios
            .get(
                `https://api.rawg.io/api/games?key=${
                    import.meta.env.VITE_RAWG_API_KEY
                }`
            )
            .then((data) => {
                console.log(data.data.results);
                setGames(data.data.results);
            });
    }, []);

    return (
        <main className="p-4 ml-4 sm:ml-64 sm:mt-6">
            <div className="pb-5">
                <h1 className="text-7xl font-bold pb-5">All time best</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 pr-5">
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

export default AllTimeBest;
