/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {Model} from "mongoose";

export type IProduct = {
  name: string;
  category: string;
  img: string;
  status: string;
  price: number;
  description: string;
  features: string[];
  individual_rating: number;
  average_rating: number;
  reviews: {message: string; user: string}[];
};

export type ProductModel = Model<IProduct, {}>;
