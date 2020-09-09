<?php
  session_start();
  require_once('./conn.php');
  if(empty($_POST['username'])||empty($_POST['password'])){
    header('Location:login.php?errorCode=1');
    exit();
  };
  $username = $_POST['username'];
  $password = $_POST['password'];
  $sql = "SELECT * FROM oceankj_users WHERE username='$username' and password='$password'";
  $result = $conn->query($sql);
  if(!$result){
    echo '新增失敗' . $conn->error;
  }
  if($result->num_rows){
    $_SESSION['username']=$username;
    header('Location:index.php');
  }else{
    header('Location:login.php?errorCode=2');
  };
?>