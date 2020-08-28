<?php
  require_once('./conn.php');
  session_start();
  $username = $_SESSION['username'];
  $comment = $_POST['comment'];
  if(empty($comment)){
    header('Location:index.php?errorCode=1');
    exit();
  };
  $sql = sprintf("SELECT * FROM oceankj_users WHERE username='%s'",$username);
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $nickname = $row['nickname'];
  $sql = "INSERT INTO oceankj_comments(nickname, content) VALUES ('$nickname', '$comment')";
  $result = $conn->query($sql);
  if(!$result){
    echo '新增失敗' . $conn->error;
  }else{
    header('Location:index.php');
  };
?>