
const request = require('request');

const geocodeAddress = (address, callback) => {
  const encodeAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    method: 'GET',
    json: true
  }, (err, response, body) => {
    if (err) {
      callback('Unable to connect to Google servers;');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('not find address');
      return;
    }
    //console.log(JSON.stringify(body, undefined, 2));
    callback(undefined, {
      Address: body.results[0].formatted_address,
      Latitude: body.results[0].geometry.location.lat,
      Longitude: body.results[0].geometry.location.lng
    });
  });
};

module.exports.geocodeAddress = geocodeAddress;