import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs",
        {text: newToDos});
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

var newToDos = [];

  app.post("/submit", (req, res) => {
    const postedText = req.body["postedText"];
    newToDos.push(postedText);
    console.log(req.body.postedText);
    console.log(newToDos);
    res.render("index.ejs", 
        {text: newToDos});
  });

app.get("/work", (req, res) => {
    res.render("work.ejs",
        {text: workNewToDos});
})

var workNewToDos = [];
app.post("/workSubmit", (req, res) => {
    const postedWorkText = req.body["postedWorkText"];
    workNewToDos.push(postedWorkText);
    console.log(req.body.postedWorkText);
    console.log(workNewToDos);
    res.render("work.ejs", 
        {text: workNewToDos});
  });