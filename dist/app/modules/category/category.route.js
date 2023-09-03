"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRoute = void 0;
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
router.get("/", category_controller_1.CategoryController.getAllCategory);
exports.CategoryRoute = router;
