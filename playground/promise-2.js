const geocodeAddress = (address) => {

};

geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}).catch((err) => {
  console.log(err);
});