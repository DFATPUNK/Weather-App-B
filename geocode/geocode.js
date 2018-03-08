const request = require('request');

const weather = require('../weather/weather.js');

const geocodeAddress = (address) => {
    const encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log('Unable to connect Google servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find that address.');
        } else if (body.status === 'OK') {
            console.log(body.results[0].formatted_address);
            weather.getWeather(`${body.results[0].geometry.location.lat},${body.results[0].geometry.location.lng}`);
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;