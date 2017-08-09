const getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'kazikai'
  };
  setTimeout(() => {
    user.id = 30;
    callback(user);
  }, 3000)
  callback(user);
};

getUser(31, (userObjer) => {
  console.log(userObjer);
});