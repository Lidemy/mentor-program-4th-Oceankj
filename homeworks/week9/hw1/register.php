<?php
  require_once("./conn.php");
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>register</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <header class="header">注意！本網站為練習用網站 ，刻意忽略資安的實作，註冊時請勿使用真實的帳號及密碼</header>
    <main>
      <div>
        <a class="main__box__btn" href="index.php">回留言板</a>
        <a class="main__box__btn" href="login.php">會員登入</a>
      </div>
      <div class="main__box">
        <h1 class="main__box__title">會員註冊</h1>
      </div>
      <form class="main__box__form" method="POST" action="./handle_register.php">
        <div>
          <p>暱稱</p>
          <input type="text" name="nickname" class="main__box__text"/>
        </div>
        <div>
          <p>帳號</p>
          <input type="text" name="username" class="main__box__text"/>
        </div>
        <div>
          <p>密碼</p>
          <input type="text" name="password" class="main__box__text"/>
        </div>
        <div>
          <input type="submit" class="main__box__btn submit" vaule="送出"/>
          <?php
        if(!empty($_GET['errorCode'])){
          $error = $_GET['errorCode'];
          if($error === '1'){
            echo  '<span class="main__error"> 資料不齊 </span>';
          }else if($error === '2'){
            echo  '<span class="main__error"> 帳號已註冊 </span>';
          };
        }
      ?>
        </div>
      </form>
    </main>
  </biody>
</html>
