<?php
require_once('./conn.php');
  $newname = $_POST['nickname'];
  $username = $_POST['username'];
  if(empty($newname)) {
    header('Location:index.php?errorCode=2');
    exit();
  };
  $sql = 'UPDATE oceankj_w11_users SET nickname=? WHERE username=?';
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss',$newname,$username);
  $result = $stmt->execute();
  if(!$result){
    echo '修改失敗' . $conn->error;
  }else{
    header('Location:index.php');
  }
?>