const request = require('request');

let data = '';
request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  });
