import { setState, getState, SongInfo } from "@/lib/state";
import { json } from "stream/consumers";
import type { NextApiRequest, NextApiResponse } from "next";
import process from "process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    if (req.headers["X-AUTH"] !== process.env.X_AUTH) {
      res.status(400).json({});
    }
    const data = JSON.parse(req.body);
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
  res.status(200).json({});
}
