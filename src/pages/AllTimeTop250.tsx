import { useEffect, useState } from "react";
import axios from "axios";

function AllTimeTop250() {
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
                `https://api.rawg.io/api/games?&dates=${formattedDateStart},${formattedDateEnd}&key=${
                    import.meta.env.VITE_RAWG_API_KEY
                }`
            )
            .then((data) => {
                console.log(data.data.results);
                setGames(data.data.results);
            });
    }, [formattedDateEnd, formattedDateStart]);

    return (
        <main className="p-4 ml-5 sm:ml-64">
            <div className="py-5">
                <h1 className="text-7xl font-bold pb-5">All time top 250</h1>
            </div>
            {games.map((item, i) => {
                return (
                    <div key={i}>
                        <p>
                            {item["name"]} :: {item["rating"]} ::{" "}
                            {item["released"]}
                        </p>
                    </div>
                );
            })}{" "}
        </main>
    );
}

export default AllTimeTop250;
