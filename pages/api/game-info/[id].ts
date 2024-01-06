import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  axios
    .get(`https://api.rawg.io/api/games/${id}?key=${process.env.RAWG_API}`)
    .then((data) => {
      res.json(data.data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
}
export const config = {
  api: {
    externalResolver: true,
  },
};
