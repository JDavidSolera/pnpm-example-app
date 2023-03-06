import { Either } from "../../../common";
import { IPromotionDataError } from "../domain";
import { IPromotion } from "../domain/Promotion";
import { IPromotionRepository } from "../domain/PromotionRepository";
import GetPromotionUseCase from "./usecases/GetPromotionUseCase";

export default class PromotionService {
  private readonly repository: IPromotionRepository;

  constructor(repository: IPromotionRepository) {
    this.repository = repository;
  }

  getPromotion(hash: string): Promise<Either<IPromotionDataError, IPromotion>> {
    console.log(hash)
    const getPromotionUseCase = new GetPromotionUseCase(this.repository);
    return getPromotionUseCase.execute(hash);
  }
}
