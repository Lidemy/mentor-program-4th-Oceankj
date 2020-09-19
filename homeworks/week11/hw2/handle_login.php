<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(empty($_POST["username"])||empty($_POST["password"])) {
    header("Location:./login.php?error_code=1");
    exit();
  };
  $username = $_POST["username"];
  $password = $_POST["password"];
  $sql = "SELECT * FROM oceankj_blogs_admin WHERE username=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s",$username);
  $result = $stmt->execute();
  if(!$result){
    echo "登入失敗" . $conn->error;
    exit();
  }
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if(empty($result->num_rows)){
    header("Location:./login.php?error_code=2");//使用者不存在
    exit();
  };
  if(password_verify($password,$row["password"])){
    $_SESSION["username"]=$username;
    header("Location:./index.php");
    exit();
  };
  header("Location:./login.php?error_code=3");//密碼錯誤
?>