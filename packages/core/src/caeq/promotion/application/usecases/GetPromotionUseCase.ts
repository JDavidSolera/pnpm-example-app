import { Either } from "../../../../common";
import { IPromotionDataError } from "../../domain";
import { IPromotion } from "../../domain/Promotion";
import { IPromotionRepository } from "../../domain/PromotionRepository";
import { IGetPromotionUseCase } from "../../domain/PromotionUseCase";

export default class GetPromotionUseCase implements IGetPromotionUseCase {
  private readonly repository: IPromotionRepository;

  constructor(repository: IPromotionRepository) {
    this.repository = repository;
  }

  execute(hash: string): Promise<Either<IPromotionDataError, IPromotion>> {
    return this.repository.getPromotionByHash(hash);
  }
}
