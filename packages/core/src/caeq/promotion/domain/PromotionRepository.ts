import { Either } from "../../../common";
import { IPromotion } from "./Promotion";
import { IPromotionDataError } from "./PromotionDataError";

export interface IPromotionRepository {
  getPromotionByHash(
    hash: string
  ): Promise<Either<IPromotionDataError, IPromotion>>;
}
