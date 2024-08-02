const express = require("express");
const { mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const HttpError = require("./models/HttpError");

const usersRoutes = require("./routes/usersRoutes");
const productsRoutes = require("./routes/productsRoutes");
// const ingredientsRoutes = require("./routes/ingredientsRoutes");
// const reviewsRoutes = require("./routes/reviewsRoutes");

const server = express();
server.use(bodyParser.json());

server.use("/api/users", usersRoutes);
server.use("/api/products", productsRoutes);
// server.use("/api/ingredients", ingredientsRoutes);
// server.use("/api/reviews", reviewsRoutes);

server.use((req, res, next) => {
  throw new HttpError("Could not find te route", 404);
});

server.use((error, req, res, next) => {
  if (res.headerSent) return next(error);
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

const url =
  "mongodb+srv://JoannaHornung:Masakajmakowa231@cluster0.97yar0o.mongodb.net/LookUp?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(url)
  .then(() => server.listen(5000))
  .catch((err) => console.log(err));
