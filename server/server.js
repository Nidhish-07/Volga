const app = require("./app");

const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");

//* Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:{err.message}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

//* Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/config.env" });
}

//* Database connection
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// app.get("/", (req, res) => {
//   res.send("Hello WOrld");
// });

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is up and running at http://localhost:${process.env.PORT}`
  );
});

//* Handling Unhandled Promise Rejection
process.on("unhandledRejection", (error) => {
  console.log(`Error:${error.message}`);
  console.log("Server closed due to unhandled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});
