import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  description: String,
  image: String,
  // createAt: new Date.now(),
});
const Book = mongoose.model("bookData", bookSchema);
export default Book;
