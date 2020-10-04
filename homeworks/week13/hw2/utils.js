/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
let siteKey = '';
let apiURL = '';
let containerElement = null;
const formTemplate = `
  <div>
    <form action='./api_add_comment.php'>
      <div class='form-group pt-4'>
        <label>暱稱</label>
        <input type='text' name='username' class='form-control'>
      </div>
      <div class='form-group'>
        <label>內容</label>
        <textarea name='content' class='form-control'></textarea>
      </div>
    <button type='button' class='btn btn-secondary submit'>送出</button>
    </form>
    <hr/>
    <div class='py-4 more'>
      <button type='button' class='btn btn-secondary'>載入更多</button>
    </div>
  </div>
`;

const btn_more = (input, site_key) => {
  $('.more').one('click', () => {
    get_comments(input, site_key);
  });
};

const escape = (unsafe) => {
  const output = unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&quot;')
    .replace(/'/g, '&#039;');
  return output;
};

const add_comment = (username, comment, Key) => {
  if ($('input')[0].value === '' || $('textarea')[0].value === '') {
    alert('請輸入暱稱/留言');
  }
  $.post(`${apiURL}./api_add_comment.php`, {
    username: username,
    comment: comment,
    site_key: Key,
  });
  window.location.reload();
};

const get_comments = (page, Key) => {
  $.ajax({
    type: 'GET',
    url: `${apiURL}/api_comments.php?page=${page}&site_key=${Key}`,
    success: (data) => {
      for (i = 0; i < 5; i += 1) {
        if (!data.comments[i]) {
          $('.more').addClass('invisible');
          return;
        }
        const username = escape(data.comments[i].username);
        const created_at = escape(data.comments[i].created_at);
        const content = escape(data.comments[i].content);
        $('.more').before(`
          <div class='row pt-sm-4' style='display: none'>
            <div class='col'>
              <div class='card' style='col'>
                <div class='card-body'>
                  <h5 class='card-title mb-0'>${username}</h5>
                  <small class='text-muted'>${created_at}</small>
                  <p class='card-text mt-2'>${content}</p>
                </div>
              </div>
            </div>
          </div>
        `);
        $('.pt-sm-4').fadeIn('4000');
      }
    },
    error: () => {
      console.log('error');
    },
  });
  btn_more(page + 1, siteKey);
};

const init = (options) => {
  siteKey = options.siteKey;
  apiURL = options.apiURL;
  containerElement = $(options.container);
  containerElement.append(formTemplate);
  get_comments(1, siteKey);
  $('.submit').on('click', () => {
    add_comment($('input')[0].value, $('textarea')[0].value, siteKey);
  });
};

init({
  siteKey: 'jim',
  apiURL: 'http://localhost:8080/week13_hw2/',
  container: '.comments_area',
});
