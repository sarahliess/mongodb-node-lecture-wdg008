const express = require("express");
const router = express.Router();
const {
  getAllArticles,
  getSingleArticle,
  createArticle,
  updateArticle,
  deleteArticle,
} = require("../controllers/articles");

router.route("/articles").get(getAllArticles).post(createArticle);

router
  .route("/articles/:id")
  .get(getSingleArticle)
  .put(updateArticle)
  .delete(deleteArticle);

module.exports = router;
