import {Router} from "express";
import {ProductRoute} from "../modules/product/product.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoute,
  },
];

// use
moduleRoutes.forEach((module) => {
  router.use(module.path, module.route);
});

export const ApplicationRoutes = router;
