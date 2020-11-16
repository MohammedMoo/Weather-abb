require('dotenv').config();
// Setup empty JS object to act as endpoint for all routes
exports.projectData = {};

// Require Express to run server and routes
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request-promise');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static(path.join(__dirname ,'assets')));
app.set('view engine' , 'ejs');

const PORT = process.env.PORT || 3000;

const zipCode = 23713;
const url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&units=imperial&appid=8fc61bd82ade2c8ff82361d5515b325b`;
// http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1
// api.openweathermap.org/data/2.5/weather?zip=${zipCode},{country code}&appid=8fc61bd82ade2c8ff82361d5515b325b


app.get('/', (req, res) => {
    request(url, (error, response, body) => {
        weather_json = JSON.parse(body); 
        console.log(weather_json);
        let weather = {
            zipCode : zipCode,
            temperature : Math.round(weather_json.main.temp),
            description : weather_json.weather[0].description,
        };
        let weatherData = {weather : weather};
        res.render('index' , weatherData)
        console.log(weather_json.sys.country);
    });

});
// Post Route
app.post('/', (req, res) => {
    
    res.redirect('/');
});



app.listen(PORT , ()=>{console.log(`server is run on port ${PORT}`)});
// Setup Server
