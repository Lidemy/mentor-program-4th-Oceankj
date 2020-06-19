#! /bin/bash
n=0;
read -p "想要幾個檔案？" x ;
if [ "${x}" != "" ]; then

until [ "${x}" == "${n}" ]
do 
n=$(($n+1));
touch "$n.js";
echo "已建立"${n}".js";
done

else

echo "請輸入數字";

fi