const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cart_id: {
      type: mongoose.Schema.ObjectId,
      ref: "cart",
    },
    final_amount: {
      type: Number,
      required: true,
    },
    order_status: {
      type: String,
      enum: ["pending", "confirmed"],
    },
    order_time: {
      type: Date,
      default: new Date(),
    },
    delivery_status: {
      type: String,
      enum: ["processing", "shipped", "out for delivery", "delivered"],
      default: "processing",
    },
    delivery_time: {
      type: Date,
    },
    payment_mode: {
      type: String,
    },
    payment_id: {
      type: String,
    },
    payment_status: {
      type: String,
      enum: ["pending", "success", "failed"],
      default: "pending",
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
    collection: "order",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
