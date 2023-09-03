import {Router} from "express";
import {ProductController} from "./product.controller";

const router = Router();

router.get("/category/:category", ProductController.getProductsbyCategory);
router.get("/related-products/:id", ProductController.getRelatedProducts);
router.get("/:id", ProductController.getSingleProduct);
router.get("/", ProductController.getAllProducts);

export const ProductRoute = router;
