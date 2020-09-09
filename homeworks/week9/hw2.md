## 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼


varchar：最大長度為可變動的，但其長度需要在1~65535個字節之間，由於最大長度不固定所以在設置的時候就要先設定最大長度。當已知對大長度時，為了更好的利用空間，可以使用varchar。

text：最大長度固定為 65535個字節，沒有預設值， 當不知道屬性的最大長度時，適合用text。

按照查詢速度： varchar > text


[參考資料1](https://blog.csdn.net/brycegao321/article/details/78038272
)

[參考資料2](https://stackoverflow.com/questions/25300821/difference-between-varchar-and-text-in-mysql)
## Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

Cookie 是什麼：

由於HTTP無狀態的特性，所以每一個 Request 之間都是獨立的，Server 無法識別他們之間的關係， Cookie 就是為了解決這個問題所產生東西。他可以將使用者的資料存在瀏覽器中，在每次發送 Request 的時候將 Cookie 內的資料跟著 Header 一起傳給 Server ，以此作為辨識。

---
在 HTTP 這一層要怎麼設定 Cookie：

當 Sever 收到 Request後， 可以傳送一個 Set-Cookie 的 Header 在 Response裡面。並把 Cookie 儲存在用戶端的瀏覽器中。

Cookie 可以設置的有效時限，超過後 Cookie 將不再被發送。此外，也可以限制 Cookie 不傳送到特定的網域或路徑。

---
瀏覽器又是怎麼把 Cookie 帶去 Server 的：

瀏覽器在發送 Request 把 Cookie 的資料放在Cookie HTTP 的 Header 內，傳給 Server。

[參考資料1](https://medium.com/@hulitw/session-and-cookie-15e47ed838bc
)

[參考資料2](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Cookies)

## 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

除了老師讓我們改的cookie會被竄改的問題之外，還有在火球術裡面提到的，在留言版把你的語法封起來，然後再開始打自己要的程式碼。

這樣想起來，在註冊的時候也很危險，只要他的username之類的設成一些違法的東西程式碼也是會壞掉，而且比留言板還要危險的是就算存的時候是用字串存，但是在讀取他的時候應該還是會出問題？難怪在註冊的時候都要限制特殊字元。

另外一個也不太確定的是雖然我們已經把cookie裡面的資訊用PHPSEESION加密了，所以不怕被冒用身份。但是不是可以透過更改cookie來讓 PHPSEESION 這個函式壞掉啊。有試著去看老師寫的第三篇文章，裡面有講到關於session的機制，但是碰到Ｃ我就更頭痛了，可能要再之後習慣解讀程式碼之後會更好看懂吧...

