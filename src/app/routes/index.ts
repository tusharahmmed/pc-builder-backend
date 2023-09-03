import {Router} from "express";
import {ProductRoute} from "../modules/product/product.route";
import {CategoryRoute} from "../modules/category/category.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoute,
  },
  {
    path: "/categories",
    route: CategoryRoute,
  },
];

// use
moduleRoutes.forEach((module) => {
  router.use(module.path, module.route);
});

export const ApplicationRoutes = router;
