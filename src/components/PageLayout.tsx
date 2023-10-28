import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";
import Loader from "../components/Loader";

const PageLayout = ({ page }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [hasMore, setHasMore] = useState(true);
  // const [index, setIndex] = useState(2);
  // const [error, setError] = useState(null);
  let formattedDateStart = "";
  let formattedDateEnd = "";
  const currentDate = new Date();
  const dateStart = new Date(currentDate);
  const dateEnd = new Date(currentDate);

  function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  if (page.id === "topPicks") {
    const dateRange = 90;
    dateStart.setDate(currentDate.getDate() - dateRange);
    formattedDateStart = formatDate(dateStart);
    dateEnd.setDate(currentDate.getDate() + dateRange);
    formattedDateEnd = formatDate(dateEnd);
  } else if (page.id === "last30Days") {
    const dateRange = 30;
    dateStart.setDate(currentDate.getDate() - dateRange);
    formattedDateStart = formatDate(dateStart);
    formattedDateEnd = formatDate(dateEnd);
  } else if (page.id === "thisPastWeek") {
    const dateRange = 7;
    dateStart.setDate(currentDate.getDate() - dateRange);
    formattedDateStart = formatDate(dateStart);
    formattedDateEnd = formatDate(dateEnd);
  } else if (page.id === "nextWeek") {
    const dateRange = 7;
    dateEnd.setDate(currentDate.getDate() + dateRange);
    formattedDateStart = formatDate(dateStart);
    formattedDateEnd = formatDate(dateEnd);
  } else if (page.id === "thisMonth") {
    const monthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    formattedDateStart = formatDate(monthStart);

    const monthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    formattedDateEnd = formatDate(monthEnd);
  } else if (page.id === "bestOfThisYear") {
    const yearStart = new Date(currentDate.getFullYear(), 0, 1);
    formattedDateStart = formatDate(yearStart);

    const yearEnd = new Date(currentDate.getFullYear(), 11, 31);
    formattedDateEnd = formatDate(yearEnd);
  } else if (page.id === "bestOfLastYear") {
    const dateStart = new Date(currentDate.getFullYear() - 1, 0, 1);
    formattedDateStart = formatDate(dateStart);

    const dateEnd = new Date(currentDate.getFullYear() - 1, 11, 31);
    formattedDateEnd = formatDate(dateEnd);
  } else if (page.id === "allTimeBest") {
    formattedDateStart = "1970-01-01";
    formattedDateEnd = formatDate(currentDate);
  }

  useEffect(() => {
    setIsLoading(true);
    let isApiSubscribed = true;

    console.log("fetching games...");
    axios
      .get(
        `https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&key=${
          import.meta.env.VITE_RAWG_API_KEY
        }`
      )
      .then((data) => {
        if (isApiSubscribed) {
          console.log(data);
          setGames(data.data.results);
          setIsLoading(false);
          // setIndex(2);
          // setHasMore(true);
        }
      });
    return () => {
      isApiSubscribed = false;
    };
  }, [formattedDateEnd, formattedDateStart]);

  // const fetchMoreData = () => {
  //   console.log("fetching more games...");
  //   axios
  //     .get(
  //       `https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&page=${index}&key=${
  //         import.meta.env.VITE_RAWG_API_KEY
  //       }`
  //     )
  //     .then((res) => {
  //       console.log("adding games: ", res.data);
  //       setGames((prevGames) => prevGames.concat(res.data.results));

  //       res.data.results.length > 0 ? setHasMore(true) : setHasMore(false);
  //     })
  //     .catch((err) => console.log(err));

  //   setIndex((prevIndex) => prevIndex + 1);
  // };

  return (
    <main className="sm:mt-6 sm:p-4">
      <div className="pb-5 space-y-2">
        <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
          {page.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {isLoading ? (
          <Loader />
        ) : (
          games.map((item, i) => {
            return (
              <GameCard
                key={i}
                name={item["name"]}
                image={item["background_image"]}
                rating={item["rating"]}
                released={item["released"]}
              />
            );
          })
        )}
      </div>
    </main>
  );
};
export default PageLayout;
