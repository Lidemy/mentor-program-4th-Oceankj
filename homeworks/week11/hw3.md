## 請說明雜湊跟加密的差別在哪裡，為什麼密碼要雜湊過後才存入資料庫

雜湊：

雜湊所得到的資料只能證明在計算當下，針對資料本體所得到的特徵，日後如果要檢驗資料本體是否有被異動，只要用相同的計算方式重新針對資料跑一次，若得到了相同的特徵，表示資料沒有被改動過，但它無法得到資料本體，因此所得出的結果稱為資料指紋（data fingerprint）。

特性：

* 無論原文的內容長短，透過雜湊演算法運算完的輸出都會是固定的長度，即輸出的長度不受原文長度影響。（檔案校驗碼（Checksum）：用來快速判斷檔案是否會損或遭串改。）
* 多對一的關係。
	* 相同的內容作為相同雜湊演算法的輸入，得到的輸出必定一樣。
	* 不同的內容作為相同雜湊演算法的輸入，得到的相同輸出的機率極低。
	* 無法將雜湊演算法的輸出解回原本的輸入。
* 實務上會再為原始資料加入 salt 之後，才會丟給雜湊演算法運算，獲得加了 salt 以後的雜湊值。

---

加密：

將明文資訊改變為難以讀取的密文內容，使之不可讀。只有擁有解密方法的對象，經由解密過程，才能將密文還原為正常可讀的內容。

特性：

* 可以用密文逆推回原文

---

區別：

雜湊是多對一的關係，加密是一對一，因此加密可以用加密過後的密文反推原本的資料，而雜湊不行。藉由這樣的特性，雜湊適合資料不需要還原的情況。


[Day 6: 加密和雜湊有什麼不一樣？](https://ithelp.ithome.com.tw/articles/10193762)

[雜湊不是加密，雜湊不是加密，雜湊不是加密。](https://dotblogs.com.tw/regionbbs/2017/09/21/hashing_is_not_encryption)

---

在做密碼驗證的時候我們並不需要真的知道使用者的密碼，我們真的要做的只是驗證使用者所輸入的資訊是否一致，

若資料庫存取明文密碼的話，一旦資料庫遭到入侵或是資料外洩，對於使用者的資訊安全會是很大的危害。


## `include`、`require`、`include_once`、`require_once` 的差別


1. include() ：函式會將指定的檔案讀入並且執行裡面的程式。 
例如：include(‘/home/me/myfile’); 
被匯入的檔案中的程式程式碼都會被執行，而且這些程式在執行的時候會擁有和原始檔中呼叫到 include() 函式的位置相同的變數範圍（variable scope）。你可以匯入同一個伺服器中的靜態檔案，甚至可以通過合併使用 include() 與 fopen() 函式來匯入其它伺服器上面的檔案。
2. include_once()：函式的作用和 include() 是幾乎相同的 
唯一的差別在於 include_once() 函式會先檢查要匯入的檔案是不是已經在該程式中的其它地方被匯入過了，如果有的話就不會再次重複匯入該檔案（這項功能有時候是很重要的，比方說要匯入的檔案裡面宣告了一些你自行定義好的函式，那麼如果在同一個程式重複匯入這個檔案，在第二次匯入的時候便會發生錯誤訊息，因為 PHP 不允許相同名稱的函式被重複宣告第二次）。
3. require()：函式會將目標檔案的內容讀入，並且把自己本身代換成這些讀入的內容。 
這個讀入並且代換的動作是在 PHP 引擎編譯你的程式程式碼的時候發生的，而不是發生在 PHP 引擎開始執行編譯好的程式程式碼的時候（PHP 3.0 引擎的工作方式是編譯一行執行一行，但是到了 PHP 4.0 就有所改變了，PHP 4.0 是先把整個程式程式碼全部編譯完成後，再將這些編譯好的程式程式碼一次執行完畢，在編譯的過程中不會執行任何程式程式碼）。
4. require_once() ： 如同 include_once()函式，函式會先檢查目標檔案的內容是不是在之前就已經匯入過了，如果是的話，便不會再次重複匯入同樣的內容。 
適合靜態文字或其它本身不含有變數，或者本身需要倚賴其它執行過的程式才能正確執行的程式程式碼。

---
require() 通常來匯入靜態的內容，而 include() 則適合用來匯入動態的程式程式碼。

[深入理解require與require_once與include以及include_once的區別](https://codertw.com/程式語言/239900/)


## 請說明 SQL Injection 的攻擊原理以及防範方法

攻擊原理：

Sql Injection 就是指 SQL 語法上的漏洞，藉由特殊字元，改變語法上的邏輯，駭客就能取得資料庫的所有內容

ex: 
輸入`' or 1=1 /* `

`select * from members where account='$name' and password='$password'`

=>`select * from members where account='' or 1=1 /*' and password=''`

`/*`在 MySQL 語法中代表註解的意思，所以`/*`後面的字串通通沒有執行，而這句判斷式「1=1」永遠成立，駭客就能登入此網站成功。

防範方法：

1. 採用程式語言提供的 Prepared statement來做參數的輸入

* Java EE – use PreparedStatement() with bind variables
* .NET – use parameterized queries like SqlCommand() or OleDbCommand() with bind variables
* PHP – use PDO with strongly typed parameterized queries (using bindParam())

2. 盡量使用 Stored Procedure

3. 對於輸入的參數做檢查! 合法字元與輸入的長度等。

4. 最小權限原則。原則上給予需要的最低權限。

5. 對於使用者輸入進行編碼，例如 MySQL

[SQL Injection 的多種攻擊方式與防護討論](https://www.qa-knowhow.com/?p=3186)

[SQL Injection 常見的駭客攻擊方式](https://www.puritys.me/docs-blog/article-11-SQL-Injection-常見的駭客攻擊方式.html)

##  請說明 XSS 的攻擊原理以及防範方法
`跨網站指令碼攻擊(Cross-Site Scripting)`

攻擊原理：

>只要使用 HTML 的 `<script>` 標籤，就可以在裡面撰寫一些 JavaScript 的程式。以為安全進入網站後反而被導向到釣魚網站、甚至被竊取帳號密碼、個人資料，但使用者仍然會傻傻地不知道發生什麼事。

像這樣由惡意人士代入可執行的惡意代碼的手法就被稱為 XSS 攻擊。

目前 XSS 攻擊的種類大致可以分成以下幾種類型：

1 . Stored XSS (儲存型)

會被保存在伺服器資料庫中的 JavaScript 代碼引起的攻擊即為 Stored XSS，最常見的就是論壇文章、留言板等等，因為使用者可以輸入任意內容，若沒有確實檢查，那使用者輸入如 `<script>` 等關鍵字就會被當成正常的 HTML 執行，標籤的內容也會被正常的作為 JavaScript 代碼執行。

2 . Reflected XSS (反射型)

Reflected 是指不會被儲存在資料庫中，而是由網頁後端直接嵌入由前端使用者所傳送過來的內容造成的，最常見的就是以 GET 方法傳送資料給伺服器時，伺服器未檢查就將內容回應到網頁上所產生的漏洞。

3 . DOM-Based XSS

了解此種 XSS 類型時，務必事先了解 DOM 是什麼，DOM 全稱為 Document Object Model，用以描述 HTML 文件的表示法，它讓我們可以使用 JavaScript 動態產生完整的網頁，而不必透過伺服器。
因此 DOM-Based XSS 就是指網頁上的 JavaScript 在執行過程中，沒有詳細檢查資料使得操作 DOM 的過程代入了惡意指令。

防範方法：

1. Stored、Reflected 防範：任何允許使用者輸入的內容都需要檢查，刪除所有`「<script>」`、`「 onerror=」`及其他任何可能執行代碼的字串。記得進行跳脫。

2. DOM-Based 防範：多使用 innerText 而非 innerHTML。


## 請說明 CSRF 的攻擊原理以及防範方法

`Cross Site Request Forgery，跨站請求偽造。`

攻擊原理：

讓使用者在不知情的情況下發送 request 到攻擊者指定的 domain，使 CSRF 攻擊成立的大前提是使用者已經登入且 session 尚未過期。
>因為瀏覽器的機制，你只要發送 request 給某個網域，就會把關聯的 cookie 一起帶上去。如果使用者是登入狀態，那這個 request 就理所當然包含了他的資訊（例如說 session id），這 request 看起來就像是使用者本人發出的。
>
--
>使用者在無知的情況下，點選某外部網站的鏈結（甚至只是瀏覽了某個頁面）回到已登入網站，即使在沒有執行任何JavaScript的情況下，也能使CSRF攻擊成立，因此CSRF也有著One-click Attack的別稱。

防範方法：

1. 使用者記得登出
2. 檢查 Referer：request 的 header 裡面會帶一個欄位叫做 referer，代表這個 request 是從哪個地方過來的，可以檢查這個欄位看是不是合法的 domain，不是的話直接 reject 掉即可。但是這方法很依賴瀏覽器的設定，另外驗證的程式碼也有機會因為不夠嚴謹而破功。
3. 加上圖形驗證碼、簡訊驗證碼等等
4. 加上 CSRF token：在 form 裡面加上一個 hidden 的欄位，叫做csrftoken，這裡面填的值由 server 隨機產生，並且存在 server 的 session 中。比對表單中的csrftoken與自己 session 裡面存的是不是一樣的，是的話就代表這的確是由使用者本人發出的 request。這個 csrftoken 由 server 產生，並且每一段不同的 session 就應該要更換一次。

 server 不能支持 cross origin 的 request。
5. Double Submit Cookie：也是由 server 產生一組隨機的 token 並且加在 form 上面。但不用把這個值寫在 session ，同是在 client side 設定一個名叫 csrftoken 的 cookie，
6. Google 在 Chrome 51 版的時候加入的新功能：SameSite cookie。

[從防禦認識CSRF__林信良](https://www.ithome.com.tw/voice/115822)

[讓我們來談談 CSRF__胡立](https://blog.techbridge.cc/2017/02/25/csrf-introduction/)

---
CSRF 和 XSS 雖然都是跨站，但是攻擊的重點不一樣。

* XSS 的 S 代表的是 `<script>` ，是靠注入原本並沒有的程式碼達到目的，攻擊的是程式碼的漏洞。

* CSRF 攻擊的重點則是在於瀏覽器與伺服器端的溝通與驗證。

真要說的話，其實 XSS 跟 SQL injection 比較像，都是通過注入未預期的資料達到攻擊的目的，只是 SQL injection 是針對 SQL 攻擊。