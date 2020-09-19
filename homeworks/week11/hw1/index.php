<?php
  require_once("./conn.php");
  require_once("./utils.php");
  session_start();
  if(!empty($_SESSION['username'])){
  $username=$_SESSION['username'];
  $sql = sprintf("SELECT U.nickname AS nickname, R.role_id AS role_id FROM oceankj_w11_users AS U LEFT JOIN oceankj_w11_roles AS R ".
        "ON U.username = R.username WHERE U.username='%s'",$username );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  $nickname = $row['nickname'];
  $role_id = $row['role_id'];
  }
?>
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>留言板_OceanKJ</title>
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
    <header class="header">注意！本網站為練習用網站 ，刻意忽略資安的實作，註冊時請勿使用真實的帳號及密碼</header>
    <main>
     <?php if(!empty($_SESSION['username'])){ ?>
        <a class='main__box__btn' href='handle_logout.php'>登出</a>
        <span class='main__box__nickname main__box__btn'>修改暱稱</span>
        <?php if((int)$role_id === 1){ ?>
              <a class='main__box__btn' href='update_role.php'>權限管理</a>
        <?php }
            }else{ ?>
        <div>
          <a class='main__box__btn' href='register.php'>會員註冊</a>
          <a class='main__box__btn' href='login.php'>會員登入</a>
        </div>
      <?php } ?>
      <p class="main__p">
        <?php 
        if(!empty($_SESSION['username'])){ ?>
          你好！
        <?php 
          echo $nickname ;
        } ?>
      </p>
      <form method= "POST" class="hide box__form__nickname" action="./handle_change_nickname.php">
        <input type="text" name="nickname"/>
        <input type="text" class="hide" name="username" value= "<?php echo $_SESSION['username'] ?>"/>
        <input type="submit" value='送出'>
      </form>
      <?php
        if(!empty($_GET['errorCode'])){
          $error = $_GET['errorCode'];
          if($error === '2'){
            echo  '<span class="main__error"> 請輸入新暱稱 </span>';
          };
        };
      ?>
      <div class="main__box">
        <h1 class="main__box__title">Comment</h1>
      </div>
      <form class="main__box__form" method="POST" action="./handle_add_comment.php">
        <div class="main__box">
          <textarea class="main__box__comment" name="comment" placeholder="請輸入你的留言..."></textarea>
          <?php
            if(!empty($_SESSION['username'])){ 
              if((int)$role_id !== 3) {?>
                <input type="submit" class="main__box__btn" value="送出"/>
                <?php
              }else { ?>
              <p class="main__notice">權限不足</p>
              <?php
              };
            }else{ ?>
              <p class="main__notice">請先登入</p>
              <?php
            }; ?>
        </div>
      </form>
      <?php
        if(!empty($_GET['errorCode'])){
          $error = $_GET['errorCode'];
          if($error === '1'){
            echo  '<span class="main__error"> 請輸入留言 </span>';
          };
        };
      ?>
      <hr/>
      <section class="main__comments">
        <?php
          $page = 1;
          if(!empty($_GET["page"])){
            $page = $_GET["page"];
          }
          $limit_per_page = 5 ;
          $offset = ($page - 1)* $limit_per_page;
          $sql = "SELECT U.nickname AS nickname, U.username AS username, C.content AS content, " .
                 "C.created_at AS created_at, C.id AS id " . 
                 "FROM oceankj_w11_comments AS C " . 
                 "LEFT JOIN oceankj_w11_users AS U ON C.username = U.username " . 
                 "WHERE C.is_deleted IS NULL " .
                 "ORDER BY C.created_at DESC " .
                 "LIMIT ? OFFSET ? ";
          $stmt = $conn->prepare($sql);
          $stmt->bind_param("ii", $limit_per_page, $offset);
          $result = $stmt->execute();
          $result = $stmt->get_result();
          if($result->num_rows > 0){
            while($row = $result->fetch_assoc()){?>
              <div class="main__comments__card">
                <div class="card__avatar"></div>
                <div class="card__content">
                  <div class="card__content__info">
                    <p class="info__name"><?php echo escape($row['nickname']); ?> @<?php echo escape($row['username']); ?>
                    </p>
                    <p class="info__time"><?php echo escape($row['created_at']); ?>
                    </p> 
                  </div>
                  <p class="card__content__comment"><?php echo escape($row['content'])?>
                  </p>
                </div>
                  <div class="card__content__opt">
                    <?php 
                      if(!empty($_SESSION['username'])){
                        if($row['username'] === $_SESSION['username'] || (int)$role_id === 1){ ?>
                          <a class="main__box__btn comments__btn" href="./update_comment.php?id=<?php echo $row['id'] ?>">編輯留言</a>
                          <a class="main__box__btn comments__btn" href="./handle_delete_comment.php?id=<?php echo $row['id'] ?>&page=<?php echo $page ?>">刪除留言</a>
                          <?php 
                        }
                      }
                     ?>
                  </div>
              </div>
            <?php 
            }
          } ?>
      </section>
      <div class="page_bar">
        <?php
          $stmt = $conn->prepare(
            "SELECT count(id) AS count FROM oceankj_w11_comments WHERE is_deleted IS NULL"
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
            <a href="./index.php">首頁</a>
            <a href="./index.php?page=<?php echo $page - 1 ?>">上一頁</a>
        <?php } ?>
        <?php if((int)$page !== (int)$total_page){ ?>
            <a href="./index.php?page=<?php echo $page + 1 ?>">下一頁</a>
            <a href="./index.php?page=<?php echo $total_page ?>">末頁</a>
        <?php } ?>
      </div>
    </main>
  </body>
  <script>
    const changeName = document.querySelector(".main__box__nickname");
    if(changeName) {
      changeName.addEventListener("click",()=>{
        const nickname = document.querySelector(".box__form__nickname");
        nickname.classList.toggle("hide");
      });
    };
    <?php 
      if(!empty($_GET['errorCode'])){
        if($_GET['errorCode'] === "2"){ ?>
          const nickname = document.querySelector(".box__form__nickname");
          nickname.classList.remove("hide");
        <?php 
        }
      } ?>
  </script>
</html>
