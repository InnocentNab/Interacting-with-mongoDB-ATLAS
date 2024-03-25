import express from "express";
import AuthorModel from "../model/author.js";

const AuthorRoute = express.Router();

AuthorRoute.get("/", (req, res) => {
  AuthorModel.find({})
    .then((authors) => {
      res.status(200).send(authors);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Author Name does not exist",
        data: err,
      });
    });
});

AuthorRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  AuthorModel.findById(id)
    .then((authors) => {
      res.status(200).send(authors);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

AuthorRoute.post("/", (req, res) => {
  const authors = req.body;
  AuthorModel.create(authors)
    .then((authors) => {
      res.status(201).send({
        message: "Author Registered",
        data: authors,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Can't Register, check details",
        error: err,
      });
    });
});

AuthorRoute.put("/:id", (req, res) => {
  const id = req.params.id;
  const authors = req.body;
  AuthorModel.findByIdAndUpdate(id, authors, { new: true })
    .then((newAuthor) => {
      res.status(200).send({
        message: "Author Profile Updated",
        data: newAuthor,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

AuthorRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  AuthorModel.findByIdAndDelete(id)
    .then((author) => {
      res.status(200).send(author);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

export default AuthorRoute;
