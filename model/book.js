import mongoose from "mongoose";

//const Schema = new mongoose.Schema
// is const Schema = new mongoose.Schema({}) the same as Schema = mongoose.Schema; const book = new schema({})
const Schema = mongoose.Schema;

const BookModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: true,
    max: [2022], //validation with custom message
  },
  isbn: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0], //validation with custom message
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdateAt: {
    type: Date,
    default: Date.now,
  },
});

// after creating a schema, then we export it as a model

export default mongoose.model("books", BookModel);
