const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Yay it's the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});


app.listen(PORT, function() {
    console.log("Server started and listening on port " + PORT);
});