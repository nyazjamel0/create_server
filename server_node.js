const http = require("http");
const fs = require("fs");
const myserver = http.createServer((req, res) => {
  res.setHeader("content-Type", "text/html");
  let filepath = "./pages/";
  switch (req.url) {
    case "/":
      filepath += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      filepath += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      filepath += "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
    }
    res.end();
  });
});

myserver.listen(4545, "localhost", () => {
  console.log("connect bw lasar porty 4545");
});

//console.log("debug done!");
//https://www.youtube.com/watch?v=UWSrz3d-63o&list=PLw7TDpTaHXwc_4sW1H7GHGmCd9AotkywE&index=6
