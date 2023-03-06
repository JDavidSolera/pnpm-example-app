import { PromotionService } from "./application"
import PromotionApi from "./infraestructure/PromotionApi"

const uri = "http://localhost:8000/api";
const promotionRepository = new PromotionApi(uri);
export const promotionService = new PromotionService(promotionRepository);

export * from "./domain";
