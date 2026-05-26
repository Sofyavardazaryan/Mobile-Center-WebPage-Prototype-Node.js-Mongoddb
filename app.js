require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));


app.use("/", indexRouter);
app.use("/products", productRoutes);


app.use((req, res) => {
  res.status(404).render("error", {
    message: "Page Not Found",
    error: {},
  });
});

module.exports = app;
