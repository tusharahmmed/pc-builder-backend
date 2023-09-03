"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationRoutes = void 0;
const express_1 = require("express");
const product_route_1 = require("../modules/product/product.route");
const category_route_1 = require("../modules/category/category.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/products",
        route: product_route_1.ProductRoute,
    },
    {
        path: "/categories",
        route: category_route_1.CategoryRoute,
    },
];
// use
moduleRoutes.forEach((module) => {
    router.use(module.path, module.route);
});
exports.ApplicationRoutes = router;
