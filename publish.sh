#!/bin/sh
while true
do
git pull origin master

var=$(cd "$(dirname "$0")";pwd)
npm run build
cd $var/build
ps ax|grep "python3 -m https.server"|grep -v grep|awk '{print $1}'|xargs kill
nohup python3 -m http.server 9988 > /tmp/doc.log 2>&1 &
echo -n "30分钟/次同步并发布中..." 
sleep 1800
done 
