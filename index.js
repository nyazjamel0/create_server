const express = require("express");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);
app.get("/", (req, res) => res.send("hello"));

app.listen(3000, "localhost", () => {
  console.log("connect bw lasar porty 3000");
});
