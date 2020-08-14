## 什麼是 Ajax？
###Asynchronous JavaScript And XML
所有非同步跟伺服器交換資料的javascrip都可以稱為ajax
## 用 Ajax 與我們用表單送出資料的差別在哪？
實務上最重要的區別在於會不會刷新介面。

兩者都會經過瀏覽器，因而會受同源政策限制，而兩者的區別在資料有無經過瀏覽器的處理：

表單：
require會先傳送瀏覽器經過瀏覽器增減資料後，經過更改的reuireq再傳到伺服器，之後respon也是經過一樣的路徑。(像是帶一個參數到新的頁面)


Ajax：直接使用JS與資料庫做資料交換，雖然也是經過瀏覽器，但不會對respon或是require做額外的資料處理，並可以避免頁面的刷新。
## JSONP 是什麼？

JSON with Padding

由於`<img>`與`<scrip>`標籤不受同源政策所影響，所有就有了利用在`<scrip>`宣告一個包含資料的function來使不同源網域可以交換資料
## 要如何存取跨網域的 API？

首先在Server端的header要加上'Access-Control_Allow-Origin'。
然後我們所使用的網域是受Server端信任的網域。

## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

因為在第四週是用NodeJS作為使用環境，而沒有透過瀏覽器，所以不會有同源政策的問題。

