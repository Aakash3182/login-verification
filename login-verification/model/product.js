const mongoose = require("mongoose");
const category = require("./category");
const product = new require("mongoose").Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
    },
    tax: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    stock: {
      type: Number,
      required: true,
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      trim: true,
    },
    weight: {
      type: Number,
      required: true,
      trim: true,
    },
    unit: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      default: 1,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    collection: "products",
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", product);
