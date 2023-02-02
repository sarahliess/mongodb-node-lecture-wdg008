const mongoose = require("mongoose");

//1. Schema-Blueprint aus Library destrukturieren
const { Schema } = mongoose;

//2. Neue Schema-Instanz erstellen
const User = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot be longer than 20 characters"],
  },
  age: {
    type: Number,
    required: true,
  },
  hobbies: {
    type: Array,
  },
});

//3. Schema als Model exportieren ('Collectionname', Schema)
module.exports = mongoose.model("User", User);
