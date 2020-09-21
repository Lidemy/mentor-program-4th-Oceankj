<?php
  require_once('./conn.php');
  session_start();
  if(empty($_SESSION['username'])) {
    header('Location:index.php');
    exit();
  };
  if(empty($_POST['comment'])) {
    header('Location:index.php?errorCode=1');
    exit();
  };
  $username = $_SESSION['username'];
  $comment = $_POST['comment'];
  $sql = "INSERT INTO oceankj_w11_comments(username, content) VALUES (?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss',$username,$comment);
  $result = $stmt->execute();
    if(!$result) {
    echo '新增失敗' . $conn->error;
  }else {
    header('Location:index.php');
  };
?>
