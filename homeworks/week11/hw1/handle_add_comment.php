<?php
  require_once('./conn.php');
  session_start();
  if(empty($_POST['comment'])) {
    header('Location:index.php?errorCode=1');
    exit();
  };
  $username = $_SESSION['username'];
  $comment = $_POST['comment'];
  $sql = "SELECT * FROM oceankj_w11_users WHERE username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('s',$username);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
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
