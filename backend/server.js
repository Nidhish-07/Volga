const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//* Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:{err.message}`);
  console.log("Shutting down server due to uncaught exception");
  process.exit(1);
});

//* Config
dotenv.config({ path: "backend/config/config.env" });

//* Database connection
connectDatabase();

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
