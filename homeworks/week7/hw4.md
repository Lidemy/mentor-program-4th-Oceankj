## 什麼是 DOM？
  Document Objet Modle，用文字表示的物件形式，是一個樹狀的結構，提供瀏覽器跟JS溝通的橋樑。
  
  [DOM介面](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)
  

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
首先，所謂的事件是指[DOM事件](https://www.runoob.com/jsref/dom-obj-event.html)根據對象的不同會有不同的事件被觸發，這裡所探討的事件傳遞機制的順序，就是指這個事件被觸發後訊號被傳遞的順序，這當中被分為三個部分：捕獲、目標、冒泡。
![ w3c 講 event flow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

在我的理解跟老闆發布任務很像，每個標籤都是一個部門，要做事的倒霉鬼就是target：

捕獲：命令被一路向下傳，從大部門到小部門，當抓到要做事的倒霉鬼，捕獲就結束了。

冒泡：倒霉鬼把事情做完，需要再回報大老闆他做完了，刷一下存在感，我們把他回報的過程叫做冒泡。


## 什麼是 event delegation，為什麼我們需要它？
延續剛剛用工作來比喻，所以我們若是要監督這個命令傳到哪裡了，我們就需要派一個去看一下當命令到了就跟我回報，這個人就是EventListener，我們可以派很多個人出去，但若是為了精簡人力，減少人力的調派，我們勢必是派一個人到其中一個信息會被傳到的部門就好，這個部門就是event delegation，這邊的精簡人力我覺得可以想成節省電腦的資源。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？


event.stopPropagation()：阻止事件傳遞，只是阻止指令傳遞，所以不存在在冒泡階段使用，則指令仍會感生作用，若在補獲階段就阻止其傳遞，則該事件仍不會發生的情況

event.preventDefault() ：阻止預設行為，不影響指令的傳遞，但不會阻止事件傳遞

---
HTML

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TEST</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
    <link rel="stylesheet" type="text/css" href="./style.css">
  </head>
  <body>
      <div class="parent1">
        <a href="https://google.com" class="child1">stopPropagation</a>
      </div>
      <div class="parent2">
        <a href="https://google.com" class="child2">preventDefault</a>
      </div>

  </body>
  <script type="text/javascript" src="./set.js"> </script>
</html>

```

JS : 

```
const parent1 = document.querySelector(".parent1");
const child1 = document.querySelector(".child1");
const parent2 = document.querySelector(".parent2");
const child2 = document.querySelector(".child2");

window.addEventListener('click',function(e){
    e.stopPropagation();
})

child2.addEventListener('click',function(e){
    e.preventDefault();
},true)
parent2.addEventListener('click',function(e){
    console.log(e.eventPhase);
},false)
```