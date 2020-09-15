<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  $old_comment = NULL;
  $error = NULL;
  if(!empty($_GET['errorCode'])){
    $error = $_GET['errorCode'];
  }else{
    if(!empty($_SESSION['username'])){
      $username=$_SESSION['username'];
      $sql = sprintf("SELECT content FROM oceankj_w11_comments WHERE id='%s'",$_GET['id']);
      $result = $conn->query($sql);
      $row = $result->fetch_assoc();
      $old_comment = $row['content'];
    };
  };
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
      <div class="main__box">
        <h1 class="main__box__title">編輯留言</h1>
        <a class="main__box__btn" href="./index.php">返回</a>
      </div>
      <hr/>
      <form class="main__box__form" method="POST" action="./handle_update_comment.php?id=<?php echo $_GET['id'] ?>">
        <div class="main__box">
          <textarea class="main__box__comment" name="comment"><?php echo $old_comment;?></textarea>
          <input type="submit" class="main__box__btn" value = "送出"/>
        </div>
      </form>
      <?php
        if($error === '1'){
          echo  '<span class="main__error"> 請輸入留言 </span>';
        }else if($error === '2'){
          echo  '<span class="main__error"> 編輯失敗 </span>';
        };
      ?>
</html>
