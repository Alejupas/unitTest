const axios = require('axios');

const getUser = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/users/2')
    .then((resp) => resp.data)
    .catch((err) => console.log(err));
};
// axios naudojam
// npm install axios
//fetch is not in node

console.log(getUser().then((data) => console.log(data.email)));

module.exports = getUser;
