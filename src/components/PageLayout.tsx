import { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../components/GameCard";

const PageLayout = ({ page }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
        }
      });
    return () => {
      isApiSubscribed = false;
    };
  }, [formattedDateEnd, formattedDateStart]);

  return (
    <main className="sm:mt-6 sm:p-4">
      <div className="pb-5 space-y-2">
        <h1 className="text-4xl font-bold text-center md:text-7xl md:pb-5 md:text-left">
          {page.title}
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {isLoading ? (
          <>
            <div
              role="status"
              className="flex space-x-3 mt-5 md:mt-0 md:ml-6 items-center justify-center md:items-start md:justify-start"
            >
              <svg
                aria-hidden="true"
                className="w-8 h-8 animate-spin text-gray-500 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <h1 className="text-2xl font-bold">Loading...</h1>
            </div>
          </>
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
