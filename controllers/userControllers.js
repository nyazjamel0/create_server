const users = [
  { id: 1, name: "ahmad", age: 17 },
  { id: 2, name: "bryar", age: 23 },
  { id: 3, name: "karvan", age: 34 },
];
const fs = require("fs");
const path = require("path");
const d = require("./../d.json");
const dataPath = path.join(__dirname, "..", "d.json");

const getUsers = (req, res) => {
  return res.json(d);
};
const getUserById = (req, res) => {
  const { id } = req.params;
  let user = d.find((user) => user.id == id);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  return res.json(user);
};

const addUser = (req, res) => {
  const newUser = req.body;
  d.push(newUser);
  fs.writeFile(dataPath, JSON.stringify(d, null, 2), (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return res.status(500).json({ error: "Failed to save user." });
    }
    console.log("Data written to file successfully.");

    return res.status(201).json(newUser);
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
};
