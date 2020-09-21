<?php
  require_once('./conn.php');
  session_start();
  if(empty($_POST['comment'])) {
    header('Location:./update_comment.php?errorCode=1');
    exit();
  };
  if(empty($_SESSION['username'])) {
    header('Location:index.php');
    exit();
  };
  $username = $_SESSION['username'];
  $comment = $_POST['comment'];
  $id = $_GET['id'];
  $sql = "SELECT C.username, R.role_id, C.id FROM oceankj_w11_comments AS C LEFT JOIN oceankj_w11_roles AS R ON C.username = R.username WHERE C.id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('i',$id);
  $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if((int)$row["role_id"] !== 1){
    if($row['username'] !== $username){
      header('Location:./update_comment.php?errorCode=2');
      exit();
    };
  };
  $sql = "UPDATE oceankj_w11_comments SET content=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss',$comment,$id);
  $result = $stmt->execute();
    if(!$result) {
    echo '新增失敗' . $conn->error;
  }else {
    header('Location:index.php');
  };
?>
