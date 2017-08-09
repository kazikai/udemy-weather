console.log('Start');;

setTimeout(() => {
  console.log('setTimeout: Inside Callback');
}, 2000);
setTimeout(() =>{
  console.log('setTimeout: second')
});
setTimeout(() =>{
  console.log('setTimeout: third')
});

console.log('Finish');