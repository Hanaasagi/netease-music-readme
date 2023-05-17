import { generateMusicRecordSvg } from "@/lib/svg";
import { generateEmptySvg } from "@/lib/svg";
import { getState } from "@/lib/state";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = getState(Boolean(req.query["allowOutdate"]) || false);

  if (state === null) {
    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(generateEmptySvg());
    return;
  }

  const axios = require("axios");

  const getImage = async (url: string) => {
    const image = await axios.get(url + "?param=120y120", {
      responseType: "arraybuffer",
    });
    const returnedB64 = Buffer.from(image.data).toString("base64");
    const svg = generateMusicRecordSvg(state?.name || "", returnedB64 || "");
    res.status(200);
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
  };

  getImage(state?.picUrl || "");
}
