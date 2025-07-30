const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public", { root: __dirname }));
app.use(userRoutes);
app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});
app.listen(4000, "localhost", () => {
  console.log("connect bwy la sar porty 4000");
});
