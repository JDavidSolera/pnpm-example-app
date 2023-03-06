import { IPromotion } from "@phoenix/core/src/caeq";
import { NextApiRequest, NextApiResponse } from "next";
import promotion from "./promotionFake";

type Data = IPromotion;

type ErrorData = {
  error: "NotFoundRoute" | "PromotionNotFound";
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  // if (req.method !== "POST") {
  //   return res.status(404).json({ error: "NotFoundRoute" });
  // }

  // if (req.body.hash !== "srleI32Fg52h") {
  //   return res.status(404).json({ error: "PromotionNotFound" });
  // }

  return res.status(200).json(promotion);
}
