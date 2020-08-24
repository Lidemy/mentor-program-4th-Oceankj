const lottery = document.querySelector('.contain__wrapper__inside__button input');
const bg = document.querySelector('.contain');
const prize = document.querySelector('.contain__wrapper__inside span');
const prizeWrapper = document.querySelector('.contain__wrapper');
lottery.addEventListener('click', () => {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery');
  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
      // Success!
      console.log(JSON.parse(request.responseText).prize);
      prize.classList.add('prize');
      prizeWrapper.classList.add('prize__wrapper');
      switch (JSON.parse(request.responseText).prize) {
        case 'NONE':
          prize.innerHTML = '<p>銘謝惠顧</p>';
          prize.style.color = 'white';
          bg.style['background-image'] = 'none';
          bg.style['background-color'] = 'black';
          break;
        case 'FIRST':
          prize.innerHTML = '<p>恭喜你中頭獎了！日本東京來回雙人遊！</p';
          prize.style.color = 'black';
          bg.style['background-image'] = 'url(https://cdn.pixabay.com/photo/2019/07/04/06/35/flight-4315953_1280.jpg)';
          break;
        case 'SECOND':
          prize.innerHTML = '<p>二獎！90 吋電視一台！</p>';
          prize.style.color = 'black';
          bg.style['background-image'] = 'url(https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872192_1280.jpg)';
          break;
        case 'THIRD':
          prize.innerHTML = '<p>恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！</p>';
          prize.style.color = 'black';
          bg.style['background-image'] = 'url(https://cdn.pixabay.com/photo/2017/08/10/03/00/youtube-2617510_1280.jpg)';
          break;
        default:
          prize.innerHTML = '<p>再試一次</p>';
          prize.style.color = 'white';
          bg.style['background-image'] = 'none';
          bg.style['background-color'] = 'black';
          break;
      }
      lottery.addEventListener('click', () => {
        window.location.reload();
      });
    } else {
      alert('系統不穩定，請再試一次');
    }
  };
  request.send(null);
});
