import express from "express";
import BookModel from "../model/book.js";
import book from "../model/book.js";

const bookRoute = express.Router();

bookRoute.get("/", (req, res) => {
  BookModel.find({})
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

bookRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findById(id)
    .then((books) => {
      res.status(200).send(books);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

bookRoute.post("/", (req, res) => {
  const books = req.body;
  console.log(books);
  // books.lastUpdatAt = new Date();
  BookModel.create(books)
    .then((books) => {
      res.status(201).send({
        message: "Added a book",
        data: books,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

bookRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const book = req.body;
  // book.lastUpdateAt = new Date(); // set the lastUpdateAt to the current date
  BookModel.findByIdAndUpdate(id, book, { new: true })
    .then((newBook) => {
      res.status(200).send(newBook);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

bookRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  BookModel.findByIdAndDelete(id)
    .then((book) => {
      res.status(200).send(book);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

export default bookRoute;
