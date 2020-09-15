<?php 
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(!empty($_GET["id"])) {
  $id = $_GET["id"];
  };
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
            <a class="navbar__btn" href="./handle_logout.php">登  出</a>
            <a class="navbar__btn" href="./admin.php">管理後台</a>
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
      <?php
        $sql = "SELECT * FROM oceankj_blogs_contents WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $result = $stmt->execute();
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        $title = escape($row["title"]);
        $date = $row["created_at"];
        $content = $row["content"];
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
            <div class="box__info">
              <p class="info__date"><?php echo $date ?></p>
            </div>
            <div class="box__content--whole">
              <p><?php echo $content ?></p>
            </div>
          </div>
        </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
</html>
