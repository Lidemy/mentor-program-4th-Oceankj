/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
const btn_more = (input) => {
  $('.more').one('click', () => {
    get_comments(input);
  });
};

const add_comment = () => {
  if ($('input')[0].value === '' || $('textarea')[0].value === '') {
    alert('請輸入暱稱/留言');
  }
  $.post('api_add_comment.php', {
    username: $('input')[0].value,
    comment: $('textarea')[0].value,
  });
  window.location.reload();
};

const get_comments = (page) => {
  $.ajax({
    type: 'GET',
    url: `./api_comments.php?page=${page}`,
    success: (data) => {
      for (i = 0; i < 5; i += 1) {
        if (!data.comments[i]) {
          $('.more').addClass('invisible');
          return;
        }
       $('.more').before(`
        <div class='row pt-sm-4' style='display: none'>
          <div class='col'>
            <div class='card' style='col'>
              <div class='card-body'>
                <h5 class='card-title mb-0'>${data.comments[i].username}</h5>
                <small class='text-muted'>${data.comments[i].created_at}</small>
                <p class='card-text mt-2'>${data.comments[i].content}</p>
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
  btn_more(page + 1);
};
