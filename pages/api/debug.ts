import { debugState } from "@/lib/state";
import type { NextApiRequest, NextApiResponse } from "next";
import process from "process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.headers["x-auth"] !== process.env.X_AUTH) {
    return res.status(400).json({});
  }

  return res.status(200).json(debugState());
}
