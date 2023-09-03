import {Schema, model} from "mongoose";
import {ProductModel, IProduct} from "./product.interface";

const productSchama = new Schema<IProduct, ProductModel>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    individual_rating: {
      type: Number,
      required: true,
    },
    average_rating: {
      type: Number,
      required: true,
    },
    reviews: {
      type: [
        {
          user: String,
          message: String,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchama.statics.getCategory = async function (id) {
  const product = await Product.findById(id).lean();

  if (product) {
    return product.category;
  }
};

export const Product = model<IProduct, ProductModel>("Product", productSchama);
