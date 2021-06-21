const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// https
const http = require("http");
const https = require("https");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// config
require("dotenv/config");
const port = process.env.PORT || 5000;
const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

// build static 연결
app.use(express.static(path.join(__dirname, "../client/build")));
app.use("/", express.static(path.join(__dirname, "uploads")));

// connect mysql
const con = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database,
  port: conf.port,
});

con.connect();

// route
app.get("/score", (req, res) => {
  con.query("select * from score order by score", (err, rows, fields) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
    res.send(rows);
  });
});

app.post("/score", (req, res) => {
  let name = req.body.name;
  let score = req.body.score;
  let param = [name, score];

  con.query(
    "insert into score(name,score) values(?,?);",
    param,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      console.log("save");
    }
  );
});

// SPA 404 Error
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

if (process.env.NODE_ENV === "production") {
  // production mode
  // https
  // .pem key base url
  const KEY_URL = process.env.KEY_URL;
  const options = {
    key: fs.readFileSync(`${KEY_URL}/privkey.pem`),
    cert: fs.readFileSync(`${KEY_URL}/cert.pem`),
    ca: fs.readFileSync(`${KEY_URL}/chain.pem`),
  };

  https.createServer(options, app).listen(443, () => {
    console.log(`mirimtulgi listening at port 443`);
  });

  // set up a route to redirect http to https
  // https://stackoverflow.com/questions/7450940/automatic-https-connection-redirect-with-node-js-express
  http
    .createServer((req, res) => {
      res.writeHead(301, {
        Location: "https://" + req.headers["host"] + req.url,
      });
      res.end();
    })
    .listen(port, () => {
      // mirimtulgi listening at port 80
      console.log(`mirimtulgi listening at port ${port}`);
    });
} else {
  // development mode
  // http
  http.createServer(app).listen(port, () => {
    // mirimtulgi listening at port 5000
    console.log(`mirimtulgi listening at port ${port}`);
  });
}
