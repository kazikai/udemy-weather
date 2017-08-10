const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const key = require('./key'); // key.js는 올리지 않는다.
/* 아래와 같은 형태
const secretKey = '....................';
module.exports.secretKey = secretKey;
*/

const weather = require('./forecast/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

console.log(argv);
console.log(key.secretKey);



geocode.geocodeAddress(argv.address, (errorMessage, result) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(result, undefined, 2));
    weather.getWeather(key.secretKey, result, (errMessage, weatherResults) => {
      if (errMessage) {
        console.log(errorMessage);
      }
      console.log(JSON.stringify(weatherResults, undefined, 2));
    });
  }
});

//https://api.darksky.net/forecast/

