#! /bin/bash
data=$(curl -s [ https://api.github.com/users/${1} ] );
echo ${data} |cut -d',' -f 19|cut -d'"' -f 4;
echo ${data} |cut -d',' -f 22,23|cut -d'"' -f 4;
echo ${data} |grep -o '"bio": ".*", "twitter_username'|cut -d'"' -f 4;
echo ${data} |cut -d',' -f 21|cut -d'"' -f 4;