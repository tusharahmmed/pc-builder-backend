/* eslint-disable @typescript-eslint/consistent-type-definitions */
import {Model} from "mongoose";

export type ICategory = {
  name: string;
};

export type CategoryModel = Model<ICategory, {}>;
