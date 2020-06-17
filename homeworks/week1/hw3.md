## 教你朋友 CLI

> 我看H0W哥你應該是用 Mac 吧！哈哈哈哈哈，真巧我也是用 Mac 欸，好啊，我可以教你 Mac 的 Command Line 怎麼用，如果你是用 Windows 的話...哈哈哈哈，阿反正觀念都差不多，你自己再去網路查查指令吧。

---

Command line 顧名思義就是用一行行的指令叫電腦做事情，跟我們一般在使用的功能其實差不多，不過平常作業系統都已經幫我們把這些指令視覺化了。

現在跳過圖形化介面雖然會不那麼直覺，但是限制也變少了，所以可以做到更多事情，熟悉之後會反而操作起來更快喔。

###首先叫出Terminal

`command` + `space` : 搜尋 Terminal ，把終端機叫出來

##接下來就可以開始操作啦，我們來一步步教你怎麼把 afu 寫進你的電腦裡

一開始你要知道你所在的位置，輸入`pwd` 然後按 [Enter] 電腦會輸出

```
/Users/H0WGer/
```
這就是你所在的位置
 ---
接著 `ls`

```
Applications   Downloads	Music	 bin		lib
Desktop		   Library	   Pictures	data		odin_on_rails
Documents      Movies		Public		H0WGer
```
類似的東西代表現在資料夾裡有什麼
 ---
假設我們要進去 Desktop 這個資料夾

`cd Desktop	` 

我們現在就在桌面了
 ---
接著新建一個叫 wifi 的資料夾，在電腦裡資料夾稱為 direction (路徑)，所以建資料夾的指令就是 `mkdir wifi`
 ---
 再來，進入 wifi `cd wifi`
 ---
新建檔案 afu.js `touch afu.js`
 ---
如果要移動或是改名的話就用 mv ，像是這樣
`mv afu.js 叛徒.js`
 ---
接下來就是把叛徒給...我是說我教你怎麼把檔案刪了

`rm 叛徒.js`
這樣子就把叛徒給解決了哈哈哈哈哈哈
---
這些是比較常見的指令，而且每個指令裡面都還有分支功能，你可以用

`man xxx`，xxx 就輸入你想要知道的指令，他就會進入說明頁，你只要按 [Q] 就可以出來啦。

---


###其他還有一些指令，我把他列出來，如果你想要變成超帥工程師的話，可以看看

vim:
---
```
vim filexxx
```
用terminal作為文字編輯器，感覺比較方便，只是一些指令要熟悉一下
 ---
一般模式：可以刪除，複製，貼上，但是無法寫東西。

[ I ]：insert,寫入模式

[esc] : 離開編輯模式

[shift] + [ : ] + [Q]：離開vim


grep:
---
```
grep 123 filexxx
```
在 filexxx 裡搜尋 123

看完之後想要改改highlight的文字，結果發現有點複雜，可能等過幾天把shell看完再來看看要怎麼裝好了，還要
**搞懂 oh-my-zsh 是啥！！**

wget:
---
```
wget [網址]
```
不只是圖片，也可以把網頁的原始碼下載下來

curl:
---
```
curl [options / URLs]
```
可以用來測試（我也不知道要測什麼）
redirection:
---
> `>`直接把想要的結果覆寫進去你指定的檔案
> `>>`把想要的結果接著寫進去你指定的檔案
>  ex:  
```
ls -al > list
```
>  將`ls -al`所輸出的結果存進list這個檔案(如果檔案不存在會新建一個)(覆寫原本內容)
 ```
echo 123456 >> number
```
>假設number裡面本來就有ABCD的內容，輸出之後number的內容會變成ABCD
123456

pipe:
---
> 就是一條直槓 | ，用在連結兩個指令，會將前一個指令輸出的東西交給下一個指令繼續動作，**非是將一串CLI同時運作**
>  ex: 
```
 cat filexxx | grep 123
 ```
輸出filexxx後，在從內搜尋123