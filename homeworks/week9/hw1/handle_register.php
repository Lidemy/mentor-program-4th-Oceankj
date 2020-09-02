<?php
  require_once('./conn.php');
  session_start();
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = $_POST['password'];
  if(empty($nickname)||empty($username)||empty($password)){
    header('Location:register.php?errorCode=1');
    exit();
  };
  $sql = "INSERT INTO oceankj_users(nickname, username ,password) VALUES ('$nickname', '$username','$password')";
  $result = $conn->query($sql);
  if(!$result){
    $code = $conn->errno;
    if($code === 1062){
      header('Location:register.php?errorCode=2');
    }else{
      die('code : ' . $code);
    };
  }else{
    $_SESSION['username']=$username;
    header('Location:index.php');
  };
?>