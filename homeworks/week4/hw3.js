const request = require('request');

request.get(`https://restcountries.eu/rest/v2/name/${process.argv[2]}`,
  (error, response, body) => {
    const deta = JSON.parse(body);
    if (deta[0] === undefined) {
      console.log('「找不到國家資訊」');
      return;
    }
    for (let i = 0; i < 3; i += 1) {
      console.log('============');
      console.log(`國家：${deta[i].name}`);
      console.log(`首都：${deta[i].capital}`);
      console.log(`貨幣：${deta[i].currencies[0].code}`);
      console.log(`國碼：${deta[i].callingCodes}`);
    }
  });
