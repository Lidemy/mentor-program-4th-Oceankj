## 跟你朋友介紹 Git

阿！是菜哥啊，管理笑話喔，簡單啦，你先去裝 [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) ，我教你怎麼用。阿對了，你要先去找 H0W 哥學一下怎麼用 Command Line 喔
 
什麼？你早就會 CLI 了喔，那太好了啊，我們直接開始吧！



> **初始化**
> ```
>  git init
> ```
> 
> 將你放笑話的資料夾做初始化(建立版本控制所需要的資料)


---
Git 是一個樹狀圖的概念，一開始會有一個主幹(master)，盡量不要直接在master上操作，不然也無法達到版本控制的效果，一開始都先建立一個新的分支(branch) ， `git branch vegetableBro`，然後進去 `git checkout vegetableBro`
 ---

> **查詢版本資訊**
> ```
> git status
> ```
> 
> * *On the branch XXX :* 在XXX這個分支
> 
> * *Changes to be committed :*
> 檔案有加入版本控制且有修改過，但尚未正式建立新版本
> 
> * *Untracked files :*  沒有加入版本控制的檔案

> ---

> **決定是否加入版本控制**

> * 將filexxx加入版本控制
> ```
> git add filexxx
> ```
> 
> * 將filexxx移出版本控制
> ```
> git rm --cached filexxx
> ```
> 
> * 將所有檔案加入版本控制
> ```
> git add .
> ```

---
每當你做完一個階段的時候就可以建一個新版本，
接下來是一些基本操作

---
>**建立新版本**
> ```
> git commit 
> ```
> 
> * 確認`Changes to be committed :` 內的版本更動
> * `git commit -m "OOXX"` : OOXX是註記
> 
> * `git commit -am` : 略過`git add` 直接commit(只有建立路徑是不會被儲存進去的，git只認檔案)
> * `git commit --amend` : 改 commit 的 message
> * 重置 commit
>  * `git reset HEAD^ --hard` :把當下的 commit 刪掉改成上一個
>  * `git reset HEAD^ --soft` = `git reset HEAD^ `: :把當下的 commit 改成未 commit 的狀態
> 

> ---

>**歷史紀錄**
> ```
> git log
> ```
> 
> 查詢 commit 的紀錄(用`git log --oneline` 顯示簡歷)

> ---

> **版本切換**
> ```
> git checkout
> ```
> 
> 後面可以加 *版本號(用git log 查)* 或是 *branch(遠端的也可以直接抓下來)* 
>*  `git checkout -- filexxx` 把 filexxx 回復到原本的狀態

> ---

> **建立忽略清單**
> 
> * `touch .gitignore` 建立名為.gitignore的檔案
> * `vim .gitignore` 寫入想要忽略的檔案名稱
> 
>*.gitignore 本身是可以加入版本控制的*

> ---

> **比較差異**
> `git diff`
> 
> 在commit之前比較此次改動前後差異

---
在你把最終版修改好之後還記得我們說過的分支嗎，你就可以把 vegetableBro 這個分支跟主幹合在一起了，那現在來介紹一下Ｂranch 有哪些功能

Branch
---

> 
> * `git branch -v` or `gb -v` 查詢分支
>*  `git branch new-feature`
>建立一名為new-feature的分支
>*  `git branch -d new-feature`
> 將new-feature這個分支刪掉
>*  `git branch -m new-feature 2 `
> 將new-feature這個分支改名為 new-feature 2
>* `git checkout` 分支切換(後面可以加 *版本號(用git log 查)* 或是 *branch*)
>* `git merge new-feature` 將 new-feature 這條 brench 合併進來我現在所在的 brench
> * **conflict :** 當兩個分支在合併的時候，版本間發生衝突，就會顯示衝突的檔案，進入該檔案，git會標示出衝突的部分，手動修正之後，再建立新的commit，重新合併。


---

最後如果你需要跟別人一起創作笑話的話你就會需要 GitHub ( 一個可以存程式碼的雲端 )

GitHub
---
> * git repository : 儲存 Git 的空間
> *  `git push origin [branch名字]`  把本機的 branch 上傳到 GitHub 
> *  `git clone [專案的SVN]` 下載到本機
> * fork 把別人的 git repository 複製到我的Git裡面 
> * GitHub Pages : 可以在GitHub上預覽自己寫的網站
> * Git hook : 自動檢查的工具，在.git的資料夾裡可以自己去試試看
