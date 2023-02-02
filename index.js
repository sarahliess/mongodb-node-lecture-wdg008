require("dotenv").config();
const cors = require("cors");
const express = require("express");
const usersRouter = require("./routes/users");
const db = require("./db/db");

const app = express();

const port = 3000;

db();

//built-in & third-party middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//Router Implementierung
app.use("/", usersRouter);

app.get("/", async (req, res) => {
  res.send(`<h1>MongoDB + Node Lecture</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
