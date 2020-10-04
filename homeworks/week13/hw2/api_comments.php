<?php
  require_once("./conn.php");
  $page = 1;
  $site_key = "jim";
  if(!empty($_GET["page"])){
    $page = $_GET["page"];
  };
  if(!empty($_GET["site_key"])){
    $site_key = $_GET["site_key"];
  };
  $limit_per_page = 5 ;
  $offset = ($page - 1)* $limit_per_page;
  $sql = "SELECT * FROM oceankj_w13_comments " . 
         "WHERE site_key = ? " .
         "ORDER BY id DESC " .
         "LIMIT ? OFFSET ? ";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param('sii', $site_key, $limit_per_page, $offset);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $comments = array();
  while($row = $result->fetch_assoc()){
    array_push($comments,array(
      "id" => $row["id"],
      "username" => $row["username"],
      "content" => $row["content"],
      "created_at" => $row["created_at"],
    ));
  };
  $json = array(
    "comments" => $comments
  );
  //讓瀏覽器顯示的資料易讀
  header("Content-type:application/json;charset:utf-8");
  $response = json_encode($json);
  echo $response;
?>