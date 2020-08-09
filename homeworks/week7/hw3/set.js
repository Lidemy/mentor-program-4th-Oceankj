const box = document.querySelector('.wrapper__display');
const typeIn = document.querySelector('.wrapper form');
const eventName = document.querySelector('.wrapper input');
const item = document.querySelectorAll('.wrapper__display__item');
const status = document.querySelectorAll('.wrapper__display__item input');
const innerText = document.querySelectorAll('.wrapper__display__item p');
const remove = document.querySelectorAll('.wrapper__display__item button');
for (let i = 0; i < status.length; i += 1) {
  status[i].addEventListener('change', () => {
    item[i].classList.toggle('compeleteBG');
    innerText[i].classList.toggle('compeleteText');
  });
  remove[i].addEventListener('click', () => {
    box.removeChild(item[i]);
  });
}
item[1].classList.toggle('compeleteBG');
status[1].setAttribute('checked', 'ture');
innerText[1].classList.add('compeleteText');
typeIn.addEventListener('submit', () => {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const button = document.createElement('button');
  const input = document.createElement('input');
  if (eventName.value !== '') {
    const newItem = box.appendChild(div);
    newItem.classList.add('wrapper__display__item');
    /*  下面那段也可以直接改成
    newItem.innerHTML = "
        <input class="wrapper__display__item__status" type="checkbox"/>
        <p class="wrapper__display__item__content">Debug</p>
        <button class="wrapper__display__item__delete">Delete</button>
        "
    */
    const newStatus = newItem.appendChild(input);
    const newInnerText = newItem.appendChild(p);
    const newRemove = newItem.appendChild(button);
    newStatus.setAttribute('type', 'checkbox');
    newInnerText.innerText = `${eventName.value}`;
    newRemove.innerText = 'Delete';
    newStatus.classList.add('wrapper__display__item__status');
    newInnerText.classList.add('wrapper__display__item__content');
    newRemove.classList.add('wrapper__display__item__delete');
    //  加入功能
    newStatus.addEventListener('change', () => {
      newItem.classList.toggle('compeleteBG');
      newInnerText.classList.toggle('compeleteText');
    });
    newRemove.addEventListener('click', () => {
      box.removeChild(newItem);
    });
  }
  eventName.value = '';
});
