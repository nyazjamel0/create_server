const users = [
  { id: 1, name: "ahmad", age: "23" },
  { id: 2, name: "mustafa", age: "46" },
  { id: 3, name: "bryar", age: "19" },
];
const getUsers = (req, res) => {
  return res.json(users);
};
const getUserById = (req, res) => {
  const { id } = req.params;
  let user = users.find((user) => user.id == id);
  if (user == null) {
    res.status(404).json({ Error: "user not found" });
  }
  return res.json(user);
};

const addUser = (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  return res.json(newUser);
};
module.exports = {
  getUsers,
  getUserById,
  addUser,
};
