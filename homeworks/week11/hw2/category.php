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
      <a class="navbar__btn">分類專區</a>
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
        <div class="category__box article__box">
        <?php
          if(!empty($_SESSION["username"])){?>
            <form class="category__creat" method="POST" action="./handle_creat_category.php">
              <p>新增分類：</p>
              <input class="category__txet" type="text" name="name"/>
              <input class="category__btn" type="submit" value="新增"/>
            </form>
          <?php
          };
          $page = 1 ;
          if(!empty($_GET["page"])){
            $page = $_GET["page"];
          };
          $limit_per_page = 20 ;
          $offset = ($page - 1)* $limit_per_page;
          $sql = "SELECT * FROM oceankj_blogs_category LIMIT ? OFFSET ?";
          $stmt = $conn->prepare($sql);
          $stmt->bind_param("ii", $limit_per_page, $offset);
          $result = $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){
              $id = $row["id"]; ?>
              <div class="category__list">
                <a class="category__list__item" href="./item.php?id=<?php echo $id ?>&name=<?php echo $row["name"] ?>"><?php echo escape($row["name"]);?></a>
                <?php
                  if(!empty($_SESSION["username"])){ ?>
                    <div class="category__list__opt">
                      <form method="POST" action="./handle_update_category.php">
                        <input class="category__txet" type="text" name="name"/>
                        <input type="hidden" name="id" value="<?php echo $id ?>">
                        <input class="category__btn" type="submit" value="更改"/>
                      </form>
                      <a class="category__btn" href="./handle_delete_category.php?id=<?php echo $id ?>">刪除</a>
                    </div>
                    <?php
                  }
                ?>
              </div>
              <hr/>
              <?php
            };
          }; ?>
        </div>
      </div>
      <div class="page_bar">
        <?php
          $stmt = $conn->prepare(
            "SELECT count(id) AS count FROM oceankj_blogs_category "
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
            <a href="./category.php">首頁</a>
            <a href="./category.php?page=<?php echo $page - 1 ?>">上一頁</a>
            <?php
          } ?>
        <?php
          if((int)$page !== (int)$total_page){ ?>
            <a href="./category.php?page=<?php echo $page + 1 ?>">下一頁</a>
            <a href="./category.php?page=<?php echo $total_page ?>">末頁</a>
            <?php
          } ?>
      </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
</html>
