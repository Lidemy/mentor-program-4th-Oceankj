/* eslint-disable no-unused-vars */
const request = require('request');

let data = '';
switch (process.argv[2]) {
  case 'list':
    request.get('https://lidemy-book-store.herokuapp.com/books?_limit=20',
      (error, response, body) => {
        data = JSON.parse(body);
        for (let i = 0; i < data.length; i += 1) {
          console.log(`${data[i].id} ${data[i].name}`);
        }
      });
    break;

  case 'read':
    request.get(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        data = JSON.parse(body);
        if (error) {
          console.log(`錯誤代碼${error}`);
          return;
        }
        if (data.id === undefined) {
          console.log('查無此書');
          return;
        }
        console.log(`${data.id} ${data.name}`);
      });
    break;

  case 'delete':
    request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      (error, response, body) => {
        console.log(`已刪除 id:${process.argv[3]}`);
      });
    break;
  case 'create':
    request.post({
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: { name: process.argv[3] },
    },
    (err, httpResponse, body) => {
    });
    break;

  case 'update':
    request.patch(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`).form({ name: process.argv[4] });
    break;
  default:
    console.log('請輸入指令');
}
