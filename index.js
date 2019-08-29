const request = require('request');
const argv = require('yargs').argv;
let city = argv.c || 'portland';
let apiKey = '5d5dd6f4d3b4a64d123e349e2e36b4c6';
let units = 'imperial';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

request(url, function(err, response, body) {
  if (err) {
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    //  console.log('body:', body);
  }
});