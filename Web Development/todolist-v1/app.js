const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var date = new Date();

    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    var today = date.toLocaleDateString("en-US", options);

    res.render("list", {dayOfWeek: today, items: items});
});

app.post("/", function(req, res) {
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(PORT, function() {
    console.log("Server is ready and listening on port " + PORT);
})