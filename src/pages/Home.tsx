import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

function Home() {
    const [games, setGames] = useState([]);
    const dateRange = 90;

    function formatDate(date: Date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const currentDate = new Date();
    const dateStart = new Date(currentDate);
    dateStart.setDate(currentDate.getDate() - dateRange);
    const formattedDateStart = formatDate(dateStart);

    const dateEnd = new Date(currentDate);
    dateEnd.setDate(currentDate.getDate() + dateRange);
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
        <main className="p-4 ml-4 sm:ml-64 sm:mt-6">
            <div className="pb-5">
                <h1 className="text-7xl font-bold pb-5">New and trending</h1>
                Based on player counts and release date
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

export default Home;
