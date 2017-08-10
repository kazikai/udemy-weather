const yargs = require('yargs');
const axios = require('axios');

const key = require('./key');
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

const encodeAddress = encodeURIComponent(argv.address);
const gecodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
let forecastApi = `https://api.darksky.net/forecast/${key.secretKey}`;

axios.get(gecodeUrl).then((res) => {
  if (res.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  //console.log(JSON.stringify(res.data, undefined, 2));
  let lat = res.data.results[0].geometry.location.lat;
  let lng = res.data.results[0].geometry.location.lng;
  forecastApi = `${forecastApi}/${lat},${lng}`;
  return axios.get(forecastApi);
}).catch((err) => {
  console.log(err);
}).then((res) => {
  const temperature = res.data.currently.temperature;
  const apparentTemperature = res.data.currently.apparentTemperature;
  console.log(temperature);
  console.log(apparentTemperature)
}).catch((err) => {
  console.log(err);
});