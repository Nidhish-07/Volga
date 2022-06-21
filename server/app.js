const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(cookieParser());

//Importing Route
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order=require("./routes/orderRoute")

app.use("/api/v7", product);
app.use("/api/v7", user);
app.use("/api/v7", order);


//* Error middleware
app.use(errorMiddleware);

module.exports = app;
