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
    }
  },
  {
    collection: "cart",
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartSchema);
