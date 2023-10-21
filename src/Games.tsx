import React, { useEffect, useState } from "react";
import axios from "axios";

function Games() {
    const [games, setGames] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    useEffect(() => {
        axios
            .get(
                `https://api.rawg.io/api/games?dates=2023-01-01,2023-12-31&ordering=-metacritic&key=${
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
