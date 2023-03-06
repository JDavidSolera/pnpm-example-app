import { Either } from "../../../common";
import { IPromotion } from "./Promotion";
import { IPromotionDataError } from "./PromotionDataError";

export interface IGetPromotionUseCase {
  execute(hash: string): Promise<Either<IPromotionDataError, IPromotion>>;
}
