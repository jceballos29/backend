import productsController from "./products.controller";
import { Router } from "express";

const router = Router();

router.post("/", productsController.createProducts);
// router.post("/bulk", productsController.createProducts);
router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

export default router;