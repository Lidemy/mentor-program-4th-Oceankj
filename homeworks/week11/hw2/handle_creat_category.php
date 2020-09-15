<?php
  require_once("./conn.php");
  require_once("./utils.php");
  $name = $_POST["name"];
  $sql = "INSERT INTO oceankj_blogs_category(name) VALUE (?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s",$name);
  $result = $stmt->execute();
  if(!$result){
    echo "新增失敗" . $conn->error;
  }else{
    header("Location:category.php");
  };
?>