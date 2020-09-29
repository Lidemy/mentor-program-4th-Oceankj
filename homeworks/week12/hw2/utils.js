/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */
/* eslint-disable prefer-const */

const add = (input) => {
  $('.add').after(
    `<div class='effect item row justify-content-center my-sm-2'>
      <div class='col-6 text-center'>
        <div class='input-group-text item_bg'>
          <input class='m-2 checkbox' type='checkbox' aria-label='Checkbox for following text input'>
          <div class='item_text'>
            <input class='edit' value='${escape(input)}'/>
            <span class='content'>${escape(input)}</span>
          </div>
          <div class='mx-auto'></div>
          <button type='button' class='close' style='color:#dc3545b3;' aria-label='Close'>
            <span class='align-text-top' aria-hidden='true'>&times;</span>
          </button>
        </div>
      </div>
    </div>`,
  );
  $('.item_text .edit').hide();//加入內容
  $('.add input').val('');//清空內容
  $('.item_text .edit').on('keydown', (e) => {
    if (e.keyCode === 13) {
      const item_text = $(e.target).parent();
      item_text.children('.content').text($(e.target).val());
      item_text.children('.content').show();
      $(e.target).hide();
    }
  });
  $('span:first').on('click', (e) => {
    const item_text = $(e.target).parent();
    item_text.children('.edit').show();
    $(e.target).hide();
  });//編輯
  $('.add + .item').on('click', (e) => {
    if (e.target.classList.value.indexOf('checkbox') >= 0) {
      const item = $(e.target).parents('.item');
      item.toggleClass('effect');
      item.toggleClass('completed');
      count();
      if ($('.btn_effect').hasClass('active')) {
        effect();
      }
      if ($('.btn_completed').hasClass('active')) {
        completed();
      }
    }// 勾選事件
  });
  $('button:first').on('click', (e) => {
    const item = $(e.target).parents('.item');
    item.remove();
    count();
  });// 刪除事件
  if ($('.btn_completed').hasClass('active')) {
    completed();
  }
  count();
};// 新增事件

const escape = (unsafe) => {
  let output = unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&quot;')
    .replace(/'/g, '&#039;');
  return output;
};

const all = () => {
  $('.effect').fadeIn();
  $('.completed').fadeIn();
  btn_active('all');
};
const effect = () => {
  $('.effect').fadeIn();
  $('.completed').fadeOut();
  btn_active('btn_effect');
};
const completed = () => {
  $('.effect').fadeOut();
  $('.completed').fadeIn();
  btn_active('btn_completed');
};

const btn_active = (input) => {
  $('.all').toggleClass('active', false);
  $('.btn_effect').toggleClass('active', false);
  $('.btn_completed').toggleClass('active', false);
  $(`.${input}`).toggleClass('active', true);
};

const count = () => {
  $('.counter').text($('.effect').length);
};
