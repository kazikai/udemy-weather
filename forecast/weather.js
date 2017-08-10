const request = require('request');
const forecastApi = 'https://api.darksky.net/forecast';



const getWeather = (key, geoCode, callback) => {
  request({
    method: 'GET',
    url: `${forecastApi}/${key}/${geoCode.Latitude},${geoCode.Longitude}`,
    json: true
  }, (err, res, body) => {
    if (err) {
      callback('not connect to forecast.io server');
    } else if (res.statusCode === 400){
      callback('bad request')
    } else if(res.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
    //debugger;
  });
};

module.exports.getWeather = getWeather;

