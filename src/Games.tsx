import { useEffect, useState } from "react";
import axios from "axios";

function Games() {
    const [games, setGames] = useState([]);
    const [searchQuery /*, setSearchQuery*/] = useState([]);

    const dateRange = 30;

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
        axios
            .get(
                `https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&ordering=-metacritic&page_size=100&key=${
                    import.meta.env.VITE_RAWG_API_KEY
                }`
            )
            .then((data) => {
                console.log(data.data.results);
                setGames(data.data.results);
            });
    }, [searchQuery, formattedDateEnd, formattedDateStart]);

    return (
        <div>
            Games
            {games.map((item, i) => {
                return (
                    <div key={i}>
                        <p>
                            {item["name"]} :: {item["metacritic"]} ::{" "}
                            {item["released"]}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Games;
