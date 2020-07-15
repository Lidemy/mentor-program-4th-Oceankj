const request = require('request');

let data = '';
request('https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      for (let i = 0; i < data.length; i += 1) {
        console.log(`${data[i].id} ${data[i].name}`);
      }
    }
  });
