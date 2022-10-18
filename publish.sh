#!/bin/sh
git pull origin Master

#获取路径
var=$(cd "$(dirname "$0")";pwd)
cd $var
abspath=`pwd`
cd "$abspath"

#清除之前生成的文件
#rm -rf $abspath/build
#PROJECT='NineData_Docs'
#sync(){
#    echo "sync $PROJECT to NineData server"
#    SyncServer="rsync://9zcloud@192.168.2.50"
#    Sync="rsync -avu --port=9022 --delete --exclude '*.sh' --progress $abspath/build/ $SyncServer/build/"
#    echo $Sync
#    eval $Sync
#}
#build(){
#    echo "Build $PROJECT"
#    OUTPUT="./build/"
#    rm -rf $OUTPUT
#    npm run build
#    sync
#}
#build
npm run build
ps ax|grep "python3 -m http.server"|grep -v grep|awk '{print $1}'|xargs kill
nohup python3 -m http.server 9988 > /tmp/doc.log 2>&1 &
