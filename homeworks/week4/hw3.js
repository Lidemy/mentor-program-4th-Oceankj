const request = require('request');

request.get(`https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    let data = '';
    try {
      data = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }
    if (response.statusCode >= 200 && response.statusCode < 300) {
      if (data[0] === undefined) {
        console.log('「找不到國家資訊」');
        return;
      }
      for (let i = 0; i < 3; i += 1) {
        console.log('============');
        console.log(`國家：${data[i].name}`);
        console.log(`首都：${data[i].capital}`);
        console.log(`貨幣：${data[i].currencies[0].code}`);
        console.log(`國碼：${data[i].callingCodes}`);
      }
    }
  });
