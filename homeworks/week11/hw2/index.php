<?php 
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
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
      </div>
    </section>
    <section class="banner">
      <div class="wrapper__ms">
        <p class="banner__title">&ltBLOG_CHING&gt</p>
        <div class="banner__content">
          <p>技術存放之地</p>
          <p>Ｗelcome to my blog</p>
          <?php
            if(!empty($_SESSION["username"])){ ?>
              <a class="btn" href="./creat_article.php">新增文章</a>
              <?php
            }
          ?>
        </div>
      </div>
    </section>
    <main class = "article">
      <?php
        $page = 1 ;
        if(!empty($_GET["page"])){
          $page = $_GET["page"];
        }
        $limit_per_page = 5 ;
        $offset = ($page - 1)* $limit_per_page;
        $sql = "SELECT A.title AS title, A.created_at AS created_at, A.id AS id, ".
               "A.content AS content, C.id AS category_id,C.name AS category_name ".
               "FROM oceankj_blogs_contents AS A ".
               "LEFT JOIN oceankj_blogs_category AS C ".
               "ON A.category_id = C.id ".
               "WHERE A.is_deleted IS NULL ORDER BY A.created_at DESC LIMIT ? OFFSET ? ";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ii", $limit_per_page, $offset);
        $result = $stmt->execute();
        $result = $stmt->get_result();
        while($row = $result->fetch_assoc()) {
          $title = escape($row["title"]);
          $date = $row["created_at"];
          $content = $row["content"];
          $category_id = NULL;
          $category_name = NULL;
          if(!empty($row["category_id"])){
            $category_id=$row["category_id"];
            $category_name=$row["category_name"];
          };
          $id = $row["id"] ?>
          <div class = "wrapper__article">
            <div class="article__box">
              <div class="box__header">
                <p class="box__header__title"><?php echo $title ?></p>
                <div class="box__header__btn">
                <?php
                  if(!empty($_SESSION["username"])){ ?>
                    <a class="btn" href="./update_article.php?id=<?php echo $id?>">編輯文章</a>
                    <a class="btn" href="./handle_delete_article.php?id=<?php echo $id?>">刪除文章</a>
                    <?php
                  };
                ?>
                </div>
              </div>
              <?php 
                if($category_name !== NULL) { ?>
                  <p class="box__category"><?php echo escape($category_name) ?></p>
                  <?php
                };
              ?>
              <div class="box__info">
                <p class="info__date"><?php echo $date ?></p>
              </div>
              <div class="box__content">
                <p><?php echo $content ?></p>
              </div>
              <a class="box__content__more btn" href="./article.php?id=<?php echo $id ?>">READ MORE</a>
            </div>
          </div>
          <?php
        };
      ?>
      <div class="page_bar">
        <?php
          $stmt = $conn->prepare(
            "SELECT count(id) AS count FROM oceankj_blogs_contents WHERE is_deleted IS NULL"
          );
          $result = $stmt->execute();
          $result = $stmt->get_result();
          $row = $result->fetch_assoc();
          $count = $row["count"];
          $total_page = ceil($count / $limit_per_page);
        ?>
        <p>第 <?php echo $page ?> 頁 / 共 <?php echo $total_page ?> 頁</p>
        <br/>
        <?php
          if((int)$page !== 1){ ?>
            <a href="./index.php">首頁</a>
            <a href="./index.php?page=<?php echo $page - 1 ?>">上一頁</a>
            <?php
          } ?>
        <?php
          if((int)$page !== (int)$total_page){ ?>
            <a href="./index.php?page=<?php echo $page + 1 ?>">下一頁</a>
            <a href="./index.php?page=<?php echo $total_page ?>">末頁</a>
            <?php
          } ?>
      </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
</html>
