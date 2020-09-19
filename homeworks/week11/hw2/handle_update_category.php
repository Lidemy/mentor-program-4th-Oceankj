<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(empty($_SESSION["username"])){
    header("Location:index.php");
  };
  $name = $_POST["name"];
  $id = $_POST["id"];
  $sql = "UPDATE oceankj_blogs_category SET name=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ss",$name,$id);
  $result = $stmt->execute();
  if(!$result){
    echo "新增失敗" . $conn->error;
  }else{
    header("Location:category.php");
  };
?>