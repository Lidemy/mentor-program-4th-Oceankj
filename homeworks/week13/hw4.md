## Webpack 是做什麼用的？可以不用它嗎？
>在網頁引入程式碼的方式有兩種 ：<br>
>1. 在 HTML 裡加入 `<script>` 標籤 。<br>
>2. 引入一個包含所有程式碼的 JS 檔。

第一種會讓程式碼很難規模化，因為載入過多的 scripts 會造成網路壅塞 ; 第二種方法則是可讀性跟可維護性很差，還會有檔案過大和作用域的問題。

由於 webpack 本身就是用 node.js 來開發，因此天生就幫我們解決了在瀏覽器上運行 CommonJS 的問題，而 webpack 的主要功能則是支援我們將寫好的不同功能的 JS 模組打包在一起，除此之外我們還可以加入不同的 loader 支援我們打包圖片、CSS 甚至順便幫我們做到 uglify 、minify 、sass 或是 babel 的功能。

除了開發者的體驗更好，對與使用者而言載入也更為快速。


## gulp 跟 webpack 有什麼不一樣？

gulp是任務管理器 ; webpack是打包工具。

雖然兩者都可以幫我們做到一次處理複數的檔案，但本質上 webpack 是在打包之前順便幫我們做處理，而 gulp 才是真正幫我們處理各個不同的任務。

所以你如果需要打包，那選用 webpack 。
如果你需要處理更複雜的任務管理，那選用 gulp  。

## CSS Selector 權重的計算方式為何？

`id` > `class` > 標籤 

越細項的贏

![權重](./pic2.png)

* InLineStyle大於上述的分類
* `!important` 最大只有`!important`可以超過`!important`