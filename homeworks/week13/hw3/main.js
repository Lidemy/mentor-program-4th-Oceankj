/* eslint-disable dot-notation,no-use-before-define,no-spaced-func */
/* eslint-disable arrow-parens,func-call-spacing,no-multi-spaces,spaced-comment */

const getGame = () => {
  const url = 'https://api.twitch.tv/kraken/games/top?limit=5';
  fetch(url, {
    headers: new Headers ({
      'Client-ID': '4ntksaugli5t9qgqi5krd8u4px6398',
      Accept: 'application/vnd.twitchtv.v5+json',
      'Content-Type': 'application/json',
    }),
    method: 'GET',
  }).then(
    (response) => response.json(),
  ).then(text => {
    const firstGame = text.top[0].game.name;
    setNavbar(text);
    getStreamer(firstGame);
  });
};

const setNavbar = (input) => {
  const navGames = document.querySelector('.navbar__btn');
  const gameFocused = document.querySelector('.content__title__gamename');
  const gamesList = input.top;
  gameFocused.innerText = gamesList[0].game.name;
  for (let i = 0; i < gamesList.length; i += 1) {
    const div = document.createElement('div');
    const gameName = gamesList[i].game.name;
    div.innerText = gameName;
    navGames.appendChild(div);             //btn of navbar
    div.addEventListener('click', (e) => {
      gameFocused.innerText = `${e.target.innerText}`;
      getStreamer(gameName);
    });
  }
};

const getStreamer = (gameName) => {
  const url = `https://api.twitch.tv/kraken/streams/?game=${gameName}&limit=20`;
  fetch(url, {
    headers: new Headers ({
      'Client-ID': '4ntksaugli5t9qgqi5krd8u4px6398',
      Accept: 'application/vnd.twitchtv.v5+json',
      'Content-Type': 'application/json',
    }),
    method: 'GET',
  }).then(
    response => response.json(),
  ).then(
    text => appendContent(text),
  );
};

const appendContent = (data) => {
  const content = document.querySelector('.content__wrapper');
  content.innerHTML = '<div class = "card__empty"></div><div class = "card__empty"></div>';
  for (let n = 0; n <= data.streams.length - 1; n += 1) {
    const streamersList = data.streams[n];
    const a = document.createElement('a');
    a.innerHTML = '<div class = "streamer__card__pic"></div><div class = "streamer__card__info"><div class = "streamer__card__info__icon"></div><div class = "streamer__card__info__txt"><div class = "streamer__card__info__txt__title">Title</div><div class = "streamer__card__info__txt__id">KJ</div></div></div>';
    a.setAttribute('class', 'streamer__card');
    a.setAttribute('href', streamersList.channel.url);
    content.insertBefore(a, document.querySelector('.card__empty'));
    document.querySelectorAll('.streamer__card__pic')[n]
      .style['background-image'] = `url(${streamersList.preview.large})`;
    document.querySelectorAll('.streamer__card__info__icon')[n]
      .style['background-image'] = `url(${streamersList.channel.logo})`;
    document.querySelectorAll('.streamer__card__info__txt__title')[n]
      .innerText = `${streamersList.channel.status}`;
    document.querySelectorAll('.streamer__card__info__txt__id')[n]
      .innerText = `${streamersList.channel['display_name']}`;
  }
};

getGame();
