<?php 
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(empty($_SESSION["username"])){
    header("Location:index.php");
  };
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>部落格_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <script src="https://cdn.ckeditor.com/4.13.0/standard/ckeditor.js"></script>
  </head>
  <body>
    <section class="navbar">
      <a class="navbar__btn" href="./list.php">文章列表</a>
      <a class="navbar__btn" href="./category.php">分類專區</a>
      <a class="navbar__btn" href="./me.php" >關於我</a>
      <div class="navbar--admin">
        <a class="navbar__btn" href="./admin.php">管理後台</a>
        <a class="navbar__btn" href="./handle_logout.php">登出</a>
      </div>
    </section>
    <section class="banner">
      <div class="wrapper__ms">
        <p class="banner__title">&ltBLOG_CHING&gt</p>
        <div class="banner__content">
          <p>技術存放之地</p>
          <p>Ｗelcome to my blog</p>
          <a class="btn" href="./index.php">回首頁</a>
        </div>
      </div>
    </section>
    <main class = "article">
      <div class = "wrapper__article">
        <div class="article__box">
          <form class="box__editer" method="POST" action="./handle_creat_article.php">
            <p>發表文章</p>
            <p class="hide">還沒寫完喔！</p>
            <input class="box__editer__title" type="text" name="title" placeholder="請輸入標題"/>
            <select class="box__editer__category" name="category" >
              <option value="" disabled selected hidden>請選擇分類</option>
              <?php
              $sql = "SELECT * FROM oceankj_blogs_category";
              $stmt = $conn->prepare($sql);
              $result = $stmt->execute();
              if(!$result){
                echo "error:".$conn->error;
              };
              $result = $stmt->get_result();
              while($row = $result->fetch_assoc()) { ?>
                <option value=<?php echo $row["id"] ?>><?php echo $row["name"]?></option>
                <?php
              }; ?>
            </select>
            <textarea class="box__editer__textarea" name="content" id="editor">
            </textarea>
            <input class="box__editer__submit btn" type="submit" value="送出">
          </form>
        </div>
      </div>
    </main>
    <footer>
      <p>Lidemy_Oceankj@2020</p>
    </footer>
  </body>
  <script>
    var content = CKEDITOR.replace("editor");
    const title = document.querySelector(".box__editer__title");
    const category = document.querySelector(".box__editer__category");
    const submit = document.querySelector(".box__editer__submit");
    category.addEventListener("change",() => {
      category.style.color = "black";
    });
    submit.addEventListener("click",() => {
      if(title.value === "" || category.value === "" || content.document.getBody().getText()=== ""){
        const notice = document.querySelector(".box__editer p+p");
        notice.classList.remove("hide");
        console.log("不可為空");
        event.preventDefault();
      }
    });
  </script>
</html>
