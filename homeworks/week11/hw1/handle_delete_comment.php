<?php
  require_once('./conn.php');
  $id = $_GET['id'];
  $page = $_GET['page'];
  $sql = "UPDATE oceankj_w11_comments SET is_deleted = 1 WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i',$id);
  $result = $stmt->execute();
  if(!$result) {
    echo '刪除失敗' . $conn->error;
  }else {
    header("Location:index.php?page=$page");
  };
?>
