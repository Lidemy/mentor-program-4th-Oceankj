<?php 
  require_once("./utils.php");
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>部落格_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
  </head>
  <body>
    <section class="navbar">
      <a class="navbar__btn" href="./list.php">文章列表</a>
      <a class="navbar__btn" href="./category.php">分類專區</a>
      <a class="navbar__btn">關於我</a>
      <div class="navbar--admin">
        <a class="navbar__btn" href="./index.php">回首頁</a>
      </div>
    </section>
    <section class="banner">
      <div class="wrapper__ms">
        <p class="banner__title">&ltBLOG_CHING&gt</p>
        <div class="banner__content">
          <p>技術存放之地</p>
          <p>Ｗelcome to my blog</p>
        </div>
      </div>
    </section>
    <main class = "article">
      <div class = "wrapper__article">
        <div class="article__box">
          <form class="box__login" method="POST" action="./handle_login.php">
            <p>使用者名稱：</p><input type="text" class="box__login__textarea" name="username"/>
            <p>密碼：</p><input type="password" class="box__login__textarea" name="password"/>
            <?php
              if(!empty($_GET["error_code"])){
                $error_code = (int)$_GET["error_code"];
                if($error_code === 1){ ?>
                  <p class="box__login__notice">請輸入 帳號/密碼</p>
                  <?php
                }else if($error_code === 2) { ?>
                  <p class="box__login__notice">使用者不存在</p>
                  <?php
                }else{ ?>
                  <p class="box__login__notice">登入失敗</p>
                  <?php
                };
              };
            ?>
            <input type="submit" class="box__login__submit btn" value="送出"/>
          </form>
        </div>
      </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
</html>
