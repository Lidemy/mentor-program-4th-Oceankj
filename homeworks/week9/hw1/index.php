<?php
  require_once("./conn.php");
  session_start();
  if(!empty($_SESSION['username'])){
  $username=$_SESSION['username'];
  $sql = sprintf("SELECT * FROM oceankj_users WHERE username='%s'",$username);
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $nickname = $row['nickname'];
  }
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>留言板_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <header class="header">注意！本網站為練習用網站 ，刻意忽略資安的實作，註冊時請勿使用真實的帳號及密碼</header>
    <main>
      <?php
      if(!empty($_SESSION['username'])){
        echo "<a class='main__box__btn' href='handle_logout.php'>登出</a>";
      }else{
        echo "
        <div>
          <a class='main__box__btn' href='register.php'>會員註冊</a>
          <a class='main__box__btn' href='login.php'>會員登入</a>
        </div>";
      }
      ?>
      <p class="main__p"><?php 
      if(!empty($_SESSION['username'])){
      echo "你好！" . $nickname;
      }
      ?></p>
      <div class="main__box">
        <h1 class="main__box__title">Comment</h1>
      </div>
      <form class="main__box__form" method="POST" action="./handle_add_comment.php">
        <div class="main__box">
          <textarea class="main__box__comment" name="comment" placeholder="請輸入你的留言..."></textarea>
          <?php
            if(!empty($_SESSION['username'])){
              echo "<input type='submit' class='main__box__btn' vaule='送出'/>";
            }else{
              echo '<p class="main__notice">請先登入</p>';
            }
          ?>
        </div>
      </form>
      <?php
        if(!empty($_GET['errorCode'])){
          $error = $_GET['errorCode'];
          if($error === '1'){
            echo  '<span class="main__error"> 請輸入留言 </span>';
          };
        };
      ?>
      <hr/>
      <section class="main__comments">
        <?php
          $sql = "SELECT * FROM oceankj_comments ORDER BY created_at DESC";
          $result = $conn->query($sql);
          if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
              echo '<div class="main__comments__card">';
              echo '<div class="card__avatar"></div>';
              echo '<div class="card__content">';
              echo '<div class="card__content__info">';
              echo '<p class="info__id">' . $row['nickname'] . '</p>';
              echo '<p class="info__time">' . $row['created_at'] .'</p>'; 
              echo '</div>';
              echo '<p class="card__content__comment">' . $row['content'] . '</p>';
              echo '</div></div>';
            }
          }     
        ?>
      </section>
    </main>
  </biody>
</html>
