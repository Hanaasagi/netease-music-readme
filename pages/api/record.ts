import { generateMusicRecordSvg } from "@/lib/svg";
import { getState } from "@/lib/state";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const state = getState();
  const svg = generateMusicRecordSvg(state?.name || "", state?.picUrl || "");
  res.status(200).setHeader("Content-Type", "image/svg+xml").send(svg);
}
