const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
  getAllArticlesOfStudent,
} = require("../controllers/students");

router.route("/students").get(getAllStudents).post(createStudent);

router
  .route("/students/:id")
  .get(getSingleStudent)
  .put(updateStudent)
  .delete(deleteStudent);

router.route("/students/:id/articles").get(getAllArticlesOfStudent);
module.exports = router;
