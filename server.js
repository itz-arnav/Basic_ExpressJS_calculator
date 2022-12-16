const express = require("express");
const path = require("path");
const body_parser = require("body-parser");
const app = express();

app.use(body_parser.urlencoded({extended : true}));
app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/", (req, res) =>{
      var num1 = Number(req.body.num1);
      var num2 = Number(req.body.num2);
      var result = num1 + num2;

      res.send("The value of the calculation is " + result);
});

app.listen(3000, () => {
      console.log("Listening at port 3000...");
})

