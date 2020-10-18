<?php
  require_once("./conn.php");
  header("Content-type:application/json;charset:utf-8");
  header("Access-Control-Allow-Origin: *");
  if(empty($_POST["comment"]) || empty($_POST["username"])) {
    $json = array(
      "ok" => false,
      "message" => "Please input content"
    );
    $response = json_encode($json);
    echo $response;
    die();
  };
  $site_key = "jim";
  if(!empty($_POST["site_key"])){
    $site_key = $_POST["site_key"];
  };
  $username = $_POST['username'];
  $comment = $_POST['comment'];
  $sql = "INSERT INTO oceankj_w13_comments(username, content,site_key) VALUES (?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sss',$username,$comment,$site_key);
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
