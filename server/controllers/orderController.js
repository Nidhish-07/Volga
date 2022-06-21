const Order = require("../models/orderModel");
const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

//*get Single Order
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//*get logged in user Orders
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    order,
  });
});

//* get all Orders - admin
exports.getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    orders,
    totalAmount,
  });
});

//* update Order Status - admin
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Bought") {
    return next(new ErrorHandler("You have already bought this order", 404));
  }

  order.orderItems.forEach(async (ord) => {
    await updateItem(ord.product, ord.quantity);
  });

  order.orderStatus = req.body.status;

  if (req.body.status === "Bought") {
    order.boughtAt = Date.now();
  }
  await order.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

async function updateItem(id, quantity) {
  const product = await Product.findById(id);

  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
}

//* delete order - admin
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }
  await order.remove();

  res.status(200).json({
    success: true,
  });
});
