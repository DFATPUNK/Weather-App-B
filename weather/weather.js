const request = require('request');

const getWeather = (coordinates) => {

    request({
        url: `https://api.darksky.net/forecast/241c675db9343ddfc83a1fb5ca8d0d58/${coordinates}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect to Forecast.io server.');
        } else if (response.statusCode === 400) {
            console.log('Unable to fetch weather.');
        } else if (response.statusCode === 200) {
            console.log(`It's currently ${body.currently.temperature}. It feels like ${body.currently.apparentTemperature}`)
        }
    });
};

module.exports.getWeather = getWeather;