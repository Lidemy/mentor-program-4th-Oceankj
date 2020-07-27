## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。


## 請問什麼是盒模型（box modal）

![參考資料](http://aliyunzixunbucket.oss-cn-beijing.aliyuncs.com/jpg/b022e0fe0bd6d6bccb7a26fa389143c4.jpg?x-oss-process=image/resize,p_100/auto-orient,1/quality,q_90/format,jpg/watermark,image_eXVuY2VzaGk=,t_100,g_se,x_0,y_0)

###包含margin、border、padding 、content：
*  margin : 其他元素的距離 border 的距離

   
   [CSS Margins](https://www.w3schools.com/css/css_margin.asp)
   
*  border : 邊框

   [CSS Border](https://www.w3schools.com/css/css_border.asp)

*  padding : content 距離 border 的距離

   [CSS Padding](https://www.w3schools.com/css/css_padding.asp)

*  content : 內文

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

[參考資料](https://medium.com/@wendy199288/css%E6%95%99%E5%AD%B8-%E9%97%9C%E6%96%BCdisplay-inline-inline-block-block%E7%9A%84%E5%B7%AE%E5%88%A5-1034f38eda82)

###inline 行內元素
預設為 inline 的元素： `<a>`,`<span>`

因為是設定為文字，所以在調整 padding 和 margin 的時候不會對其他文字有變化(但可以透過更改行高來調整內文間的間距 )，但若設定框線或背景顏色就會發現事實上其他行會被蓋到。

###block 區塊元素
預設為 block 的元素： `<h1>`,`<p>`,`<div>`

會佔滿一整行，可以任意調整盒模型。

###inline-block

直行排列的 block。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
[參考資料](https://zh-tw.learnlayout.com/position.html)

###static

```
.style {
   position: static;
 }
```

static 是預設值。照著瀏覽器預設的配置自動排版在頁面上，因為每個瀏覽器的預設值不ㄧ樣，所以在開新專案前都需要先導入一個樣板來初始化。
`<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">`

---

###relative
```
.style {
  position: relative;
  top: -20px;
  left: 20px;
}
```
relative 表現的和 static 一樣，除非你增加了一些額外的屬性(只是從原本的位置移開，下面元素並不會取代他的位置)。例如 `top` 、 `right` 、 `bottom` 和 `left` 屬性，會使元素的基準點遠離你所指定的距離(基準點為左上角)，且不影響其他元素。

---
###fixed
```
.style {
  position: fixed;
  bottom: 0;
  right: 0;
}
```
相較於瀏覽器的位置(view port)做定位。

---
###absolute
```
.relative {
  position: relative;
}
.absolute {
  position: absolute;
  top: 120px;
  right: 0;
}
```
是以上層遇到的第一個非static元素做定位，如果沒有可以用來定位的元素，就會以<body>做為定位基準，就像是以前用Word對圖片或是文字方塊的文繞圖改成「文字在前」「文字在後」的感覺，元素會脫離原本的排。