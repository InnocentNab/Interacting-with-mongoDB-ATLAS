// const express = require("express");
// const { connectToMongoDB } = require("./db");
// require("dotenv").config();

import express from "express";

import connectToMongoDB from "./db.js";
import bookRoute from "./routes/books.route.js";
import AuthorRoute from "./routes/authors.route.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

connectToMongoDB();
app.use(express.json()); //this is the body parser in express that gets our payload from the body
app.use("/books", bookRoute);
app.use("/authors", AuthorRoute);

app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.all("*", (req, res, next) => {
  res.send({
    message: "Required Page does not Exist",
  });
  next();
});

app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
