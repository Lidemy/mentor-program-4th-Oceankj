<?php
  require_once("./conn.php");
  header("Content-type:application/json;charset:utf-8");
  if(empty($_POST["comment"]) || empty($_POST["username"])) {
    $json = array(
      "ok" => false,
      "message" => "Please input content"
    );
    $response = json_encode($json);
    echo $response;
    die();
  };
  $username = $_POST['username'];
  $comment = $_POST['comment'];
  $sql = "INSERT INTO oceankj_w11_comments(username, content) VALUES (?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('ss',$username,$comment);
  $result = $stmt->execute();
  if(!$result) {
    $json = array(
      "ok" => false,
      "message" => $conn->error
    );
    $response = json_encode($json);
    echo $response;
    die();
  };
  $json = array(
    "ok" => true,
    "message" => "Success"
  );
  $response = json_encode($json);
  echo $response;
?>
