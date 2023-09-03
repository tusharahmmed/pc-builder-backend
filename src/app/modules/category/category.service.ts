/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {Category} from "./category.model";

// get all books
const getAllCategory = async () => {
  const result = await Category.find({});
  return result;
};

export const CategoryService = {
  getAllCategory,
};
