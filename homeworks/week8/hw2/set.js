/* eslint-disable dot-notation */
const navGames = document.querySelector('.navbar__btn');
const content = document.querySelector('.content__wrapper');

const getStreamer = () => {
  const gameFocused = document.querySelector('.content__title__gamename');
  console.log(gameFocused.innerText);
  const request = new XMLHttpRequest();
  request.open('GET', `https://api.twitch.tv/kraken/streams/?game=${gameFocused.innerText}&limit=20`, true);
  request.setRequestHeader('Client-ID', '4ntksaugli5t9qgqi5krd8u4px6398');
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = () => {
    const steamerData = JSON.parse(request.responseText);
    console.log(steamerData);
    for (let n = 0; n <= steamerData.streams.length; n += 1) {
      const a = document.createElement('a');
      a.innerHTML = '<div class = "streamer__card__pic"></div><div class = "streamer__card__info"><div class = "streamer__card__info__icon"></div><div class = "streamer__card__info__txt"><div class = "streamer__card__info__txt__title">Title</div><div class = "streamer__card__info__txt__id">KJ</div></div></div>';
      a.setAttribute('class', 'streamer__card');
      a.setAttribute('href', steamerData.streams[n].channel.url);
      content.insertBefore(a, document.querySelector('.card__empty'));
      document.querySelectorAll('.streamer__card__pic')[n].style['background-image'] = `url(${steamerData.streams[n].preview.large})`;
      document.querySelectorAll('.streamer__card__info__icon')[n].style['background-image'] = `url(${steamerData.streams[n].channel.logo})`;
      document.querySelectorAll('.streamer__card__info__txt__title')[n].innerText = `${steamerData.streams[n].channel.status}`;
      document.querySelectorAll('.streamer__card__info__txt__id')[n].innerText = `${steamerData.streams[n].channel['display_name']}`;
    }
  };
  request.send();
};

const getGame = (cb) => {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://api.twitch.tv/kraken/games/top?limit=5', false);
  request.setRequestHeader('Client-ID', '4ntksaugli5t9qgqi5krd8u4px6398');
  request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  request.onload = () => {
    const gameFocused = document.querySelector('.content__title__gamename');
    if (request.status >= 200 && request.status < 400) {
      const gamesName = JSON.parse(request.responseText).top;
      for (let i = 0; i < gamesName.length; i += 1) {
        const div = document.createElement('div');
        div.innerText = `${gamesName[i].game.name}`;
        navGames.appendChild(div);
        div.addEventListener('click', (e) => {
          gameFocused.innerText = `${e.target.innerText}`;
          content.innerHTML = '<div class = "card__empty"></div><div class = "card__empty"></div>';
          getStreamer();
        });
      }
      gameFocused.innerText = gamesName[0].game.name;
    }
    cb();
  };
  request.send();
};

getGame(getStreamer);
