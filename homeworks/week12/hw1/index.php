<?php
  require_once("./conn.php");
  //require_once("./api_comments.php");
  session_start();
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>留言板_OceanKJ_api版</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <body>
    <main>
      <div class="container">
        <form action="./api_add_comment.php">
          <div class="form-group pt-4">
            <label>暱稱</label>
            <input type="text" name="username" class="form-control">
          </div>
          <div class="form-group">
            <label>內容</label>
            <textarea name="content" class="form-control"></textarea>
          </div>
          <button type="button" class="btn btn-secondary submit">送出</button>
        </form>
        <hr/>
        <div class="py-4 more">
          <button type="button" class="btn btn-secondary">載入更多</button>
        <div>
      </div>
    </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.js" type="text/javascript"></script>
  <script src="utils.js" type="text/javascript"></script>
  <script>
    get_comments(1);
    $(".submit").on("click",()=>{
      add_comment();
    });

  </script>
</html>
