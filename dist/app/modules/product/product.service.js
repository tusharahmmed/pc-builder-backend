"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
const product_model_1 = require("./product.model");
// get all books
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({});
    return result;
});
const getProductsbyCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({ category });
    return result;
});
const getSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById(id);
    return result;
});
const getRelatedProducts = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield product_model_1.Product.getCategory(id);
    const result = yield product_model_1.Product.find({
        $and: [{ category: { $in: category } }, { _id: { $ne: id } }],
    });
    return result;
});
exports.ProductService = {
    getAllProducts,
    getProductsbyCategory,
    getSingleProduct,
    getRelatedProducts,
};
