<?php
  require_once('./conn.php');
  $username = $_POST['username'];
  $role = $_POST['role'];
  $sql = "UPDATE oceankj_w11_roles SET role_id=? WHERE username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss',$role,$username);
  $result = $stmt->execute();
    if(!$result) {
    echo '更改失敗' . $conn->error;
  }else {
    header('Location:./update_role.php');
  };
?>
