const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);


    res.render("list", {kindOfDay: day, itemsList: items});
});

app.post("/", function(req, res) {
    var item = req.body.newItem;

    items.push(item);

    res.redirect("/");
});

app.listen(PORT, function() {
    console.log("Server started and listening on port " + PORT);
});