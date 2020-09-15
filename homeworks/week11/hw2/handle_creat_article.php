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
  $sql = "INSERT INTO oceankj_blogs_contents(title,content,category_id) VALUE (?,?,?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sss",$title,$content,$category);
  $result = $stmt->execute();
  if(!$result){
    echo "新增失敗" . $conn->error;
  }else{
    header("Location:index.php");
  };
?>