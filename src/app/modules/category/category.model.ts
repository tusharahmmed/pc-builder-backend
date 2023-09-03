import {Schema, model} from "mongoose";
import {CategoryModel, ICategory} from "./category.interface";

const productSchama = new Schema<ICategory, CategoryModel>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Category = model<ICategory, CategoryModel>(
  "Category",
  productSchama
);
