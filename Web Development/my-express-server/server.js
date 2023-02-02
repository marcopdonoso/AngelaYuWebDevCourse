const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", function (req,res) {
    res.send("Contact me at: marcopdonoso@gmail.com");
});

app.get("/about", function(req, res) {
    res.send("I'm an electronics engineer learning Web Development at the age of 40, because I want to improve my incomes by doing something I love. Cheers!");
});

app.get("/hobbies", function(req, res) {
    res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});