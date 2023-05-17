import { setState, SongInfo } from "@/lib/state";
import type { NextApiRequest, NextApiResponse } from "next";
import process from "process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers["x-auth"] !== process.env.X_AUTH) {
    return res.status(400).json({});
  }

  if (req.method === "POST") {
    let data = req.body;
    if (req.headers["content-type"] !== "application/json") {
      try {
        data = JSON.parse(req.body);
      } catch (error) {
        return res.status(400).json({});
      }
    }

    setState(
      new SongInfo(
        data.id,
        data.name,
        data.singer,
        data.album_id,
        data.pic_url,
        data.song_url
      )
    );
  }
  return res.status(200).json({});
}
