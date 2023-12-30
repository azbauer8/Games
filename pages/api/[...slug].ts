import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;
  if (slug?.length === 2) {
    if (slug[0] === "game") {
      axios
        .get(
          `https://api.rawg.io/api/games/${slug[1]}?key=${process.env.RAWG_API}`
        )
        .then((data) => {
          res.json(data.data);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } else if (slug[0] === "screenshots") {
      axios
        .get(
          `https://api.rawg.io/api/games/${slug[1]}/screenshots?key=${process.env.RAWG_API}`
        )
        .then((data) => {
          res.json(data.data);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    } else {
      let formattedDateStart = "";
      let formattedDateEnd = "";
      const currentDate = new Date();
      const dateStart = new Date(currentDate);
      const dateEnd = new Date(currentDate);

      if (slug[0] === "TopPicks") {
        const dateRange = 90;
        dateStart.setDate(currentDate.getDate() - dateRange);
        formattedDateStart = formatDate(dateStart);
        dateEnd.setDate(currentDate.getDate() + dateRange);
        formattedDateEnd = formatDate(dateEnd);
      } else if (slug[0] === "Last30Days") {
        const dateRange = 30;
        dateStart.setDate(currentDate.getDate() - dateRange);
        formattedDateStart = formatDate(dateStart);
        formattedDateEnd = formatDate(dateEnd);
      } else if (slug[0] === "ThisPastWeek") {
        const dateRange = 7;
        dateStart.setDate(currentDate.getDate() - dateRange);
        formattedDateStart = formatDate(dateStart);
        formattedDateEnd = formatDate(dateEnd);
      } else if (slug[0] === "NextWeek") {
        const dateRange = 7;
        dateEnd.setDate(currentDate.getDate() + dateRange);
        formattedDateStart = formatDate(dateStart);
        formattedDateEnd = formatDate(dateEnd);
      } else if (slug[0] === "ThisMonth") {
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
      } else if (slug[0] === "BestOfThisYear") {
        const yearStart = new Date(currentDate.getFullYear(), 0, 1);
        formattedDateStart = formatDate(yearStart);
        const yearEnd = new Date(currentDate.getFullYear(), 11, 31);
        formattedDateEnd = formatDate(yearEnd);
      } else if (slug[0] === "BestOfLastYear") {
        const dateStart = new Date(currentDate.getFullYear() - 1, 0, 1);
        formattedDateStart = formatDate(dateStart);
        const dateEnd = new Date(currentDate.getFullYear() - 1, 11, 31);
        formattedDateEnd = formatDate(dateEnd);
      } else if (slug[0] === "AllTimeBest") {
        formattedDateStart = "1970-01-01";
        formattedDateEnd = formatDate(currentDate);
      }

      axios
        .get(
          `https://api.rawg.io/api/games?dates=${formattedDateStart},${formattedDateEnd}&page=${slug[1]}&key=${process.env.RAWG_API}`
        )
        .then((data) => {
          res.json(data.data);
        })
        .catch((error) => {
          res.status(500).json({ error: error.message });
        });
    }
  }
}
export const config = {
  api: {
    externalResolver: true,
  },
};

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
