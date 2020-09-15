<?php 
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  $id_input = $_GET["id"];
  $name_input = $_GET["name"];
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>部落格_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
  </head>
  <body>
    <section class="navbar">
      <a class="navbar__btn" href="./list.php">文章列表</a>
      <a class="navbar__btn" href="./category.php">分類專區</a>
      <a class="navbar__btn" href="./me.php" >關於我</a>
      <div class="navbar--admin">
        <?php
          if(!empty($_SESSION["username"])){ ?>
            <a class="navbar__btn" href="./admin.php">管理後台</a>
            <a class="navbar__btn" href="./handle_logout.php">登  出</a>
        <?php
          }else { ?>
            <a class="navbar__btn" href="./login.php">登  入</a>
            <?php
          }; ?>
        <a class="navbar__btn" href="./index.php">回首頁</a>
      </div>
    </section>
    <section class="banner">
      <div class="wrapper__ms">
        <p class="banner__title">&ltBLOG_CHING&gt</p>
        <div class="banner__content">
          <p>技術存放之地</p>
          <p>Ｗelcome to my blog</p>
        </div>
      </div>
    </section>
    <main class = "article">
      <div class = "wrapper__article">
        <div class="article__box">
        <?php
          $page = 1 ;
          if(!empty($_GET["page"])){
            $page = $_GET["page"];
          };
          $limit_per_page = 2 ;
          $offset = ($page - 1)* $limit_per_page;        
          $sql = "SELECT A.title AS title, A.created_at AS created_at, A.id AS id, ".
          "C.id AS category_id ".
          "FROM oceankj_blogs_contents AS A ".
          "LEFT JOIN oceankj_blogs_category AS C ".
          "ON A.category_id = C.id ".
          "WHERE A.is_deleted IS NULL ".
          "AND category_id = ? ".
          "ORDER BY A.created_at DESC LIMIT ? OFFSET ? ";
          $stmt=$conn->prepare($sql);
          $stmt->bind_param("iii", $id_input, $limit_per_page, $offset);
          $result = $stmt->execute();
          $result = $stmt->get_result(); ?>
          <p><?php echo $name_input ?></p>
          <?php
          while($row = $result->fetch_assoc()) {
            $title = escape($row["title"]);
            $date = $row["created_at"];
            $id = $row["id"] ?>
              <div class="box__header">
                <p class="box__header__title"><?php echo $title ?></p>
                <div class="box__header__btn">
                  <?php
                    if(!empty($_SESSION["username"])){ ?>
                      <a class="btn" href="./update_article.php?id=<?php echo $id?>">編輯文章</a>
                      <a class="btn" href="./handle_delete_article.php?id=<?php echo $id?>">刪除文章</a>
                      <?php
                    }; ?>                  
                </div>
              </div>
              <div class="box__info ">
                <p class="info__date "><?php echo $date ?></p>
              </div>
              <a class="box__content__more list__box__more btn" href="./article.php?id=<?php echo $id ?>">READ MORE</a>
            </div>
            <?php
          };?>
        </div>
      </div>
      <div class="page_bar">
        <?php
          $stmt = $conn->prepare(
            "SELECT count(id) AS count FROM oceankj_blogs_contents WHERE is_deleted IS NULL AND category_id = ? "
          );
          $stmt->bind_param("i", $id_input);
          $result = $stmt->execute();
          $result = $stmt->get_result();
          $row = $result->fetch_assoc();
          $count = $row["count"];
          $total_page = ceil($count / $limit_per_page);
        ?>
        <p>第 <?php echo $page ?> 頁 / 共 <?php echo $total_page ?> 頁</p>
        <br/>
        <?php
          if((int)$page !== 1 ){ ?>
            <a href="./item.php">首頁</a>
            <a href="./item.php?page=<?php echo $page - 1 ?>">上一頁</a>
            <?php
          } ?>
        <?php
          if((int)$page !== (int)$total_page ){ ?>
            <a href="./item.php?page=<?php echo $page + 1 ?>">下一頁</a>
            <a href="./item.php?page=<?php echo $total_page ?>">末頁</a>
            <?php
          } ?>
      </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
</html>
