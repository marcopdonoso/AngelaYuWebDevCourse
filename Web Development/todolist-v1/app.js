const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const PORT = process.env.PORT || 3000;

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {

    const day = date.getDate();

    res.render("list", {listTitle: day, items: items});
});

app.post("/", function(req, res) {
    if(req.body.list === "Work") {
        workItems.push(req.body.newItem);
        res.redirect("/work");
    } else {
        items.push(req.body.newItem);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", items: workItems});
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(PORT, function() {
    console.log("Server is ready and listening on port " + PORT);
})