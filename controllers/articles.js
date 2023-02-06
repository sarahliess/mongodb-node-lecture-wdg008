const Article = require("../models/Article");
const Student = require("../models/Student");

const getAllArticles = async (req, res) => {
  try {
    const allArticles = await Article.find();
    res.status(200).json(allArticles);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const getSingleArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findById(id);
    res.status(200).json(article);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const createArticle = async (req, res) => {
  const { title, student } = req.body;
  try {
    //1. Artikel erstellen
    const newArticle = await Article.create({ title, student });
    //2. Studenten finden, der den Artikel erstellt hat und updaten
    const updatedStudent = await Student.findByIdAndUpdate(
      //Student ID
      newArticle.student,
      //neuer Artikel wird in das Array der Artikel des Studenten gepusht
      { $push: { articles: newArticle._id } },
      { new: true }
    );

    res.status(201).send(`New Article has been created`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, student } = req.body;
  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      id,
      { title, student },
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedArticle = await Article.findByIdAndDelete(id);
    res
      .status(200)
      .send(`Article ${deletedArticle.first_name} has been deleted`);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
};
