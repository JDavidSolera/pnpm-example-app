import axios from "axios";
import { Either } from "../../../common";
import {
  IPromotion,
  IPromotionDataError,
  IPromotionRepository,
} from "../domain";

export default  class PromotionApi implements IPromotionRepository {
  private urlApi: string;

  constructor(urlApi: string) {
    this.urlApi = urlApi;
  }

  async getPromotionByHash(
    hash: string
  ): Promise<Either<IPromotionDataError, IPromotion>> {
    try {
      const response = await axios.post(`${this.urlApi}/validate-hash`, {
        hash,
      });

      console.log(response.data)
      return Either.right(response.data);
    } catch (error) {
      return Either.left({
        kind: "PromotionNotFound",
        error: "La promoción no fué encontrada",
      });
    }
  }
}
