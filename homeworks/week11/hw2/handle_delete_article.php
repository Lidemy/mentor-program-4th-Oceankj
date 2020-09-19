<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(empty($_SESSION["username"])){
    header("Location:index.php");
  };
  $id = $_GET["id"];
  $sql = "UPDATE oceankj_blogs_contents SET is_deleted='1' WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s",$id);
  $result = $stmt->execute();
  if(!$result){
    echo "刪除失敗" . $conn->error;
  }else{
    header("Location:index.php");
  };
?>