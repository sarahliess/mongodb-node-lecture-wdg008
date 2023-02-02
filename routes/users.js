const express = require("express");
const router = express.Router();
//Controller importieren
const {
  getAllUsers,
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.route("/users").get(getAllUsers).post(createUser);

router
  .route("/users/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
