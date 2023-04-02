const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_data",
});

app.post("/reg", (req, res) => {
  const sql =
    "INSERT INTO data_user (`person`, `email`, `phone`, `work`, `service`, `tariff`, `hoursRent`) VALUES (?)";
  const values = [
    req.body.person,
    req.body.email,
    req.body.tel,
    req.body.work,
    req.body.service,
    req.body.tariff,
    req.body.hoursRent,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error!");
    } 
    return res.json(data)
  });
});

app.listen(8081, function () {
  console.log("running backend server!");
});
