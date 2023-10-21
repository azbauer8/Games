import React, { useEffect, useState } from "react";
import axios from "axios";

function Games() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);

    const dateRange = 30;

    const currentDate = new Date();
    const dateStart = new Date(currentDate);
    dateStart.setDate(currentDate.getDate() - dateRange);
    let year = dateStart.getFullYear();
    let month = String(dateStart.getMonth() + 1).padStart(2, "0");
    let day = String(dateStart.getDate()).padStart(2, "0");
    const formattedDateStart = `${year}-${month}-${day}`;

    const dateEnd = new Date(currentDate);
    dateEnd.setDate(currentDate.getDate() + dateRange);
    year = dateEnd.getFullYear();
    month = String(dateEnd.getMonth() + 1).padStart(2, "0");
    day = String(dateEnd.getDate()).padStart(2, "0");
    const formattedDateEnd = `${year}-${month}-${day}`;

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
    }, [searchQuery]);

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
