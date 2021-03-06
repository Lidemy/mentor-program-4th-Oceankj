## 請簡單解釋什麼是 Single Page Application
SPA（Single Page Application）意思是僅有一個頁面的應用程式，也就是說網頁不需跳轉頁面就可以達到基本的建立、讀取、修改、刪除資料功能。


[單一頁面應用程式-黃冠融](https://medium.com/@mybaseball52/單一頁面應用程式-c98c8a17081)

## SPA 的優缺點為何
優點：

1. 把 Server-side 的工作丟給 Client-side，以降低 Server 的負載量
2. 因為前後端分離，所以在職責分配上會更加的清楚，某方面而言更容易維護
3. 使用者體驗更佳


缺點：

1. 因為資料都是在載入的時候透過瀏覽器渲染，所以原始的 HTML 會變得很簡單，並不利於 SEO
2. 根據老師的文章， SEO 的問題可以在第一次載入得時候用 SSR (Sever-side render) 渲染，而之後使用者使用時再以 SPA 為主，如此就可以兼顧到 SEO 跟 使用者體驗，因此前端的架構更加複雜，甚至單純前端就需要用到 MVC (Model-View-Controller) 來做管理。

[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://medium.com/@hulitw/introduction-mvc-spa-and-ssr-545c941669e9)

[MVC是一個巨大誤會-HOWTOMAKEATURN](http://blog.turn.tw/?p=1539)
## 這週這種後端負責提供只輸出資料的 API，前端一律都用 Ajax 串接的寫法，跟之前透過 PHP 直接輸出內容的留言板有什麼不同？

Ajax 串接：

這週的寫法是用SPA的概念下去寫，更專注在畫面的呈現上，前端工作量變多，而且各個功能間的互相連動也讓我很苦惱，例如在顯示未完成事項這個功能，我就要把勾選跟新增都要連動刷新的功能，當要做的功能越來越多我有點不敢想像做出來的成品會複雜成怎樣，更別說還要兼顧可讀性，這其實是讓我最煩惱的地方，一直覺得自己寫的東西邏輯不夠嚴謹...<br/>但後端的溝通變得簡單很多，做出來的成品體驗起來也的確比較精緻。



PHP 直接輸出內容：
是 SSR 的方式去寫，前端寫起來真的比較像是美編跟後端溝通的橋樑，比較少在做邏輯的判斷，所以也就不難理解為什麼會有人說前端不算工程師，然後會有美編兼前端，或是後端兼前端的職位產生了，所以還是像老師說的一樣，就看你的產品需求是什麼吧。所以這週上完後我好像有點抓到要怎麼從求職網站開的需求去暸解他們的產品了？
