const mongoose = require("mongoose");

const { Schema } = mongoose;

const Article = new Schema({
  title: {
    type: String,
    required: true,
  },
  published: {
    type: Date,
    default: new Date(),
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
  },
});

module.exports = mongoose.model("Article", Article);
