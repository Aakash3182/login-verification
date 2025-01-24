const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: Array,
      default: [],
    },
    user: {
      type: Object,
      default: {},
    },
    total_price: {
      type: Number,
      default: 0,
    },
    delivery_charge: {
      type: Number,
      default: 0,
    },
    delivery_type: {
      type: String,
      default: "",
    },
    billing_address: {
      type: String,
      default: "",
    },
    shipping_adderss: {
      type: String,
      default: "",
    },
  },
  {
    collection: "cart",
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
