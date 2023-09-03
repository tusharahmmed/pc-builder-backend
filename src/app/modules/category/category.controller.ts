import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import {sendResponse} from "../../../shared/sendResponse";
import {CategoryService} from "./category.service";

// get all books
const getAllCategory = catchAsync(async (req, res) => {
  const result = await CategoryService.getAllCategory();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "categories retrieved successfully",
    data: result,
  });
});

export const CategoryController = {
  getAllCategory,
};
