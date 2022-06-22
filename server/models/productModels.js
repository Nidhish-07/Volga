const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
  },
  owner: {
    type: String,
    // required: ["true", "Please enter owner name"],
    trim: true,
  },
  contactNo: {
    type: Number,
    // required: [true, "Please enter contact no"],
    maxLength: [10, "Contact no cannot exceed more than 10 digits"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product  price"],
    maxLength: [7, "Price cannot exceed 7 characters "],
  },
  images: [
    {
      public_id: {
        type: String,
        default: 0,
      },
      url: {
        type: String,
        default: 0,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
