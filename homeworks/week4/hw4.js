const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    Accept: 'application/vnd.twitchtv.v5+json',
    'Client-ID': '4ntksaugli5t9qgqi5krd8u4px6398',
  },
};

function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    const info = JSON.parse(body);
    for (let i = 0; i < info.top.length; i += 1) {
      console.log('---------------------------------------');
      console.log(`${info.top[i].game.name}\n觀看人數：${info.top[i].viewers}`);
    }
  }
}

request(options, callback);
