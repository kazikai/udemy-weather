const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved!');
    //reject('reject');
  }, 2500);
});
somePromise.then((message) => {
  console.log(message);
}, (errMessage) => {
  console.log(errMessage);
});

const asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('typeof is not number');
      }
    }, 1500);
  });
};
asyncAdd(2,3).then((result) => {
  console.log(result);
  return asyncAdd(result, '33');
}).catch((err) => {
  console.log(err);
}).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log(err);
});