##AWS 網頁部署

一開始毫無頭緒，花了一整天的時間去讀[ AWS 的資料](https://aws.amazon.com/tw/getting-started/fundamentals-core-concepts/?e=gs2020&p=gsrc)，想說他們自己寫的東西至少一定會把優點寫完整吧！<br>
不過受限於現在對於網路還是很陌生，很多東西就先跳過，看完之後有點不太扎實的感覺，一陣茫然，我根本連我該選哪個服務我都不知道啊，於是我就關掉視窗，接束這一天。

第二天，改變方針，我決定先照著前人的腳步走，終於看到了我該去的地方進入[EC2](https://ap-northeast-1.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#LaunchInstanceWizard:)。<br>
因為太多『單字』了，如果一直卡在這裡我覺得動力會消耗殆盡，於是繼續照著筆記走，其實結合昨天看的資料有些時候會有豁然開朗的感覺，不過新手最大的問題其實是沒有自信，更不要說會很怕我是不是哪裡沒有做對就要負擔額外的支出。

總之照著前人的路走我順利的把我的 todolist 放上去啦，接下來就是去看老師的影片理解我剛剛到底在做什麼，順便複盤一下。

####Step 1: Choose an Amazon Machine Image (AMI)  選擇機器映像檔
這個步驟就是在選擇要安裝的作業
有兩個點一直讓我搞混：

1. AMI & IAM : AMI 就是一個虛擬光碟，一個存有你作業系統安裝檔的映像檔而已。 IAM 我還是沒有深入去瞭解，但好像是針對這個 AWS 做使用者管理的機制。
2. Linux & Ubuntu : 在網路上大家都說遠端控制都是用 Linux 在控制，但這次在裝作業系統的時候居然是用 Ubuntu ，這是啥？一開始很困惑，但就是先接受就對了，之後在查資料的時候常常都是找到 Linux  的解法，但是莫名的在我這裡也可以用，我就先用再說，是等最後都做完才去找到，阿，原來 Ubuntu 就是一個 Linux 的分支而已啊！

####Step 2: Choose an Instance Type 選擇主機等級

說實在還是不太懂，尤其在我查完 [資料](https://docs.aws.amazon.com/zh_tw/AWSEC2/latest/UserGuide/InstanceStorage.html) 以後，原本我就是理解為選擇儲存空間的大小，結果好像沒這麼簡單，但反正我就是選免費那的。

####Step 3: Configure Instance Details 主機設定

不太懂。

####Step 4: Add Storage

應該就是字面意思，但是選擇預設的就好了(真的很怕被多收錢哈哈哈哈哈)

####Step 5: Add Tags

 應該是用來管理的，但沒有仔細研究可以做到怎樣的管理
 
####Step 6: Configure Security Group （aws 上的防火牆）

這裡的撞牆點，是會把這裡設置的防火牆跟 Ubuntu 設置的搞混，就不知道自己到有沒有設置或是為什麼明明有開卻連不上。

####Step 7: Review Instance Launch

要記得把憑證下載下來，這應該是私鑰，之前老師在講雜湊的時候我記得有講到這個加密法。


遠端環境建置
---

- 輸入指令  `ssh -i + key + 使用者名稱 + IPV4`

```bash
$ ssh -i ~/Downloads/ivymuchacha.pem ubuntu@18.224.169.246
```

####1.更新 ubuntu 系統

```
sudo apt update && sudo apt upgrade && sudo apt dist-upgrade
```
sudo ：要用管理員的身份去執行

####2.安裝 tasksel
一個懶人包用來裝 LAMP

```
$ sudo apt install tasksel
```
####3. 安裝 LAMP

```
$ sudo tasksel install lamp-server
```
LAMP(Linux,Apache,MySQL,PHP/Perl/Ptyhon)

####4.安裝 phpmyadmin

```
sudo apt install phpmyadmin
```
跟著筆記做設定
但有個點可以記錄一下：
>在用 SQLpro 的時候卡住了，telnet 檢查 80正常 ; 22 正常 ; 3306 失敗 ; 3306 失敗 ; 3306 失敗....但是AWS 確實有把 3306 打開，密碼也正確，著實崩潰了一下，就只好一直看老師的影片，後來發現是
```
vim /etc/mysql/mysql.conf.d/mysqld.cnf
```
這個檔案裡面的
```
bind-address           = 127.0.0.1
```
這行沒有註解掉