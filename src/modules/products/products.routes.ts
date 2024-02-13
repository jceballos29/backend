import { logger } from "../../utils";
import productsController from "./products.controller";
import { Router } from "express";

const router = Router();

logger.info("Loading products routes");
router.post("/", productsController.createProducts);
router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

export default router;