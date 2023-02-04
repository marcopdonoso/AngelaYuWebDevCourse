const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Cochabamba&units=metric&appid=3c3d658decb7027bc7ae6670e7956712";

    https.get(url, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@4x.png";

            res.write("<p>The weather is currently " + description + "</p>");
            res.write("<h1>The temperature in Cochabamba is " + temp + 
            " degrees Celcius</h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});


app.listen(3000, function() {
    console.log("Server is running on port 3000.")
});