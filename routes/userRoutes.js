const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  addUser,
} = require("./../controllers/userControllers");

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", addUser);

module.exports = router;
