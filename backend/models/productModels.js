const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
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
});

module.exports = mongoose.model("Product", productSchema);
