const express = require("express");
const {
  getUsers,
  getUserById,
  addUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.get("/users", getUsers);
router.get("/user/:id", getUserById);
router.post("/user", addUser);
module.exports = router;
