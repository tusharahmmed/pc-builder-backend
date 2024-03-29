/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Product} from "./product.model";

// get all books
const getAllProducts = async () => {
  const result = await Product.find({});
  return result;
};

const getProductsbyCategory = async (category: string) => {
  const result = await Product.find({category});
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const getRelatedProducts = async (id: string) => {
  const category = await Product.getCategory(id);

  const result = await Product.find({
    $and: [{category: {$in: category}}, {_id: {$ne: id}}],
  });
  return result;
};

export const ProductService = {
  getAllProducts,
  getProductsbyCategory,
  getSingleProduct,
  getRelatedProducts,
};
