const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.sendFile("./pages/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", { root: __dirname });
});
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});
app.use((req, res) => {
  res.status(404).sendFile("./pages/404.html", { root: __dirname });
});

app.listen(3000, "localhost", () => {
  console.log("connect bw lasar porty 3100");
});
