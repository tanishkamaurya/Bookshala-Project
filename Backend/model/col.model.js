import mongoose from "mongoose";

const colSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bookname: {
    type: String,
    required: true
  },
  pdf: {
    type: String,
    required: true
  },
});

const Col = mongoose.model("Col", colSchema);
export default Col;
