#!/bin/sh
function scp_file {
    local file=$1
    local passwd="9zcloud"
    expect -c"
        spawn scp -P 9022 -r ${file} 9zcloud@192.168.2.50:/home/9zcloud/website/scripts
        expect {
          \"*assword\" {set timeout 300; send \"${passwd}\r\";}
        }
        expect eof"
}
read -p "输入内容：" str
echo "$str" > scripts/a.txt
scp_file "scripts/a.txt"
rm scripts/a.txt
