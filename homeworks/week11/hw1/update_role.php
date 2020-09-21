<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>權限管理_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <?php
  require_once("./conn.php");
  session_start();
  $username = $_SESSION["username"];
  $sql = "SELECT role_id FROM oceankj_w11_roles WHERE username = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s",$username);
  $result = $stmt->execute();
  $result = $stmt->get_result();
  $row = $result->fetch_assoc();
  if((int)$row["role_id"] !== 1){
    header("Location:./index.php");
    exit();
  };
?>
  <body>
    <header class="header">注意！本網站為練習用網站 ，刻意忽略資安的實作，註冊時請勿使用真實的帳號及密碼</header>
    <main>
      <div class="main__box">
        <h1 class="main__box__title">權限管理</h1>
        <a class="main__box__btn" href="./index.php">返回</a>
      </div>
      <hr/>
        <?php
          $page = 1;
          if(!empty($_GET["page"])) {
            $page = $_GET["page"];
          };
          $limit_per_page = 5;
          $offset = ($page - 1) * $limit_per_page;
          $sql = sprintf("SELECT R.username AS username, R.role_id AS role_id, U.id AS id FROM oceankj_w11_roles AS R LEFT JOIN oceankj_w11_users AS U ON R.username = U.username ORDER BY R.role_id LIMIT %s OFFSET %s",$limit_per_page,$offset);
          $result = $conn->query($sql);
          if($result->num_rows > 0){
            while($row = $result->fetch_assoc()) {?>
              <form class="roles_box" method="POST" action="./handle_update_role.php">
                <p><?php echo $row["id"]?></p>
                <p><?php echo $row["username"]?></p>
                <select name="role">
                  <?php
                    for($value=1; $value<4; $value+=1) {
                      switch($value) {
                        case 1 :
                          $role_name = "管理員";
                          break;
                        case 2 :
                          $role_name = "一般會員";
                          break;
                        case 3 :
                          $role_name = "限制會員";
                          break;
                      };
                      if($value === (int)$row["role_id"]) { ?>
                        <option value="<?php echo $value ?>" selected><?php echo $role_name ?></option>
                        <?php
                      }else { ?>
                        <option value="<?php echo $value ?>" ><?php echo $role_name ?></option>
                        <?php
                      }
                    } ?>
                </select>
                <input type="hidden" name="username" value="<?php echo $row["username"]?>">
                <input type="submit" value="更改">
              </form>
              <?php
            };
          }; ?>
      <div class="page_bar">
        <?php
          $stmt = $conn->prepare(
            "SELECT count(role_id) AS count FROM oceankj_w11_roles"
          );
          $result = $stmt->execute();
          $result = $stmt->get_result();
          $row = $result->fetch_assoc();
          $count = $row["count"];
          $total_page = ceil($count / $limit_per_page);
        ?>
        <p>第 <?php echo $page ?> 頁 / 共 <?php echo $total_page ?> 頁</p>
        <br/>
        <?php if((int)$page !== 1){ ?>
            <a href="./update_role.php">首頁</a>
            <a href="./update_role.php?page=<?php echo $page - 1 ?>">上一頁</a>
        <?php } ?>
        <?php if((int)$page !== (int)$total_page){ ?>
            <a href="./update_role.php?page=<?php echo $page + 1 ?>">下一頁</a>
            <a href="./update_role.php?page=<?php echo $total_page ?>">末頁</a>
        <?php } ?>
      </div>
</html>
