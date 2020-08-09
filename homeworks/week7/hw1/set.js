/* eslint-disable no-lonely-if */
const element = document.querySelector('.submit');
const star = document.querySelectorAll('.required input');
const questionName = document.querySelectorAll('.question');
const redword = document.querySelectorAll('.question__text--notice');
const alarm = (num) => {
  redword[num].style.visibility = 'initial';
};
element.addEventListener('submit', () => {
  let c = 0;
  for (let i = 0; i < redword.length; i += 1) {
    redword[i].style.visibility = 'hidden';
  }
  for (let counter = 0; counter < 6; counter += 1) {
    if (star[counter].type === 'radio') {
      if (star[3].checked === false && star[4].checked === false) {
        alarm(3);
        c += 1;
      }
    } else if (star[counter].type === 'text') {
      if (star[counter].value === '') {
        if (counter === 5) {
          alarm(4);
        } else {
          alarm(counter);
        }
        c += 1;
      }
    }
  }
  if (c > 0) {
    return;
  }
  let list = '';
  for (let counter = 0; counter < 6; counter += 1) {
    if (star[counter].type === 'radio') {
      if (star[counter].checked) {
        list += `${questionName[3].innerText}為${star[counter].value},`;
      }
    } else {
      if (counter !== 5) {
        list += `${questionName[counter].innerText}為${star[counter].value},`;
      } else {
        list += `${questionName[counter - 1].innerText}為${star[counter].value},`;
      }
    }
  }

  list += `${questionName[5].innerText}為${star[6].value}`;
  alert(list);
});
