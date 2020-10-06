<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todolist_OceanKJ</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  </head>
  <style>
    .completed .item_bg {
      background:#d2d2d2;
      color:white;
    }
    .completed .item_bg input+span{
      text-decoration:line-through;
    }
    .effect .item_bg {
      background:white;
      color:#495057;
    }
  </style>
  <body style="background: #f5f5f5;">
    <main class="container mb-lg-4">
      <div class="title row justify-content-center">
        <div class="col-3 text-center">
          <h1 class="text-center" style="font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
          color: rgba(175, 47, 47, 0.15);font-weight: 100;font-size: 100px;">
          todos</h1>
        </div>
      </div>
      <div class="add row justify-content-center pb-0">
        <div class="col-6 text-center">
          <div class="input-group mb-1">
            <input type="text" class="form-control form-control-lg" 
              aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
              placeholder="What needs to be done?">
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col col-lg-2">
          <span class="counter ml-sm-2 align-middle" style="font-size:14px;color:#6c757d">0</span>
          <span class="align-middle" style="font-size:14px;color:#6c757d">item left</span>
        </div>
        <div class="col col-lg-4">
          <button type="button" class="active all btn btn-outline-secondary btn-sm">All</button>
          <button type="button" class="btn_effect btn btn-outline-secondary btn-sm">Active</button>
          <button type="button" class="btn_completed btn btn-outline-secondary btn-sm">completed</button>
          <button type="button" class="clear btn btn-outline-secondary btn-sm float-right">clear completed</button>
        </div>
      </div>
    </main>
    <nav class="navbar mt-lg-5 navbar-light justify-content-center">
      <small style="color:#bfbfbf;">2020/09/24 Created by : Kao Ching</small>
    </nav>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.5.1.js" type="text/javascript"></script>
  <script src="utils.js" type="text/javascript"></script>
  <script>
    $(".add").on("keydown",(e)=>{
      if(e.keyCode === 13){
        if($(".add input").val()){
          add($(".add input").val());
        };
      };
    });
    $(".all").on("click",()=>{
      all();
    });
    $(".btn_effect").on("click",()=>{
      effect();
    });
    $(".btn_completed").on("click",()=>{
      completed();
    });
    $(".clear").on("click",()=>{
      $(".completed").remove();
      count();
    });
    count();
  </script>
</html>
