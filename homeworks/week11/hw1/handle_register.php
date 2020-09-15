<?php
  require_once('./conn.php');
  session_start();
  $nickname = $_POST['nickname'];
  $username = $_POST['username'];
  $password = password_hash($_POST['password'],PASSWORD_DEFAULT);
  if(empty($nickname)||empty($username)||empty($password)){
    header('Location:register.php?errorCode=1');
    exit();
  };
  $sql = 'INSERT INTO oceankj_w11_users(nickname, username ,password) VALUES (?, ?, ?)';
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss',$nickname,$username,$password);
  $result = $stmt->execute();

  if(!$result){
    $code = $conn->errno;
    if($code === 1062){
      header('Location:register.php?errorCode=2');
    };
    die('code : ' . $code);
  } else {
    $sql = 'INSERT INTO oceankj_w11_roles(username, role_id) VALUES (?, ?)';
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ss',$username,$defult);
    $defult = 2;
    $result = $stmt->execute();
    $_SESSION['username']=$username;
    header('Location:index.php');
  };
?>