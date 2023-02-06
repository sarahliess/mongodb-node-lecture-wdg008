const mongoose = require("mongoose");

const { Schema } = mongoose;

const Student = new Schema({
  name: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  articles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Article",
      default: [],
    },
  ],
});

module.exports = mongoose.model("Student", Student);
