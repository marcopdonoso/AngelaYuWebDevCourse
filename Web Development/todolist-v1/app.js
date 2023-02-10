const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    let date = new Date();

    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    let today = date.toLocaleDateString("en-US", options);

    res.render("list", {dayOfWeek: today, items: items});
});

app.post("/", function(req, res) {
    items.push(req.body.newItem);
    res.redirect("/");
});

app.listen(PORT, function() {
    console.log("Server is ready and listening on port " + PORT);
})