import {Router} from "express";
import {CategoryController} from "./category.controller";

const router = Router();

router.get("/", CategoryController.getAllCategory);

export const CategoryRoute = router;
