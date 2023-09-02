import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {ProductService} from "./product.service";
import {Types} from "mongoose";

// get all books
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProducts();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Products retrieved successfully",
    data: result,
  });
});

// get products by category
const getProductsbyCategory = catchAsync(async (req, res) => {
  const {category} = req.params;
  const result = await ProductService.getProductsbyCategory(category);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

// get products by category
const getSingleProduct = catchAsync(async (req, res) => {
  const {id} = req.params;
  const result = await ProductService.getSingleProduct(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});
// get products by category
const getRelatedProducts = catchAsync(async (req, res) => {
  const {id, category}: any = req.query;
  const result = await ProductService.getRelatedProducts(
    id as string,
    category as string
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Products retrieved successfully",
    data: result,
  });
});

export const ProductController = {
  getAllProducts,
  getProductsbyCategory,
  getSingleProduct,
  getRelatedProducts,
};
