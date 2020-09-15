<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(empty($_SESSION["username"])){
    header("Location:index.php");
  };
  $title = $_POST["title"];
  $category = $_POST["category"];
  $content = $_POST["content"];
  $id = $_POST["id"];
  $sql = "UPDATE oceankj_blogs_contents SET title=?,content=?,category_id=? WHERE id=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssss",$title,$content,$category,$id);
  $result = $stmt->execute();
  if(!$result){
    echo "新增失敗" . $conn->error;
  }else{
    header("Location:index.php");
  };
?>