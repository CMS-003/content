#!/bin/bash
echo "1.打包后端代码: npm run build:prod"
npm run build

OIFS=$IFS
IFS=$'\n'

newfile=""
newVersion=""

while read line
do
  if [[ $line = *"image:"* ]]
  then
    version=${line##*:}
    prefix=${line%:*}

    # 新版本
    oldVersionZ=${version##*.}
    let newVersionZ=$oldVersionZ+1
    newVersion=${version%.*}"."${newVersionZ}
    echo "2.镜像tag版本号+1"
    newfile=${newfile}${prefix}:${newVersion}"\n"
  else
    newfile=${newfile}${line}"\n"
  fi
done < docker-compose.yml

# 去掉末尾的\n
len=${#newfile}-2
newfile=${newfile:0:len}

echo "3.修改docker-compose文件"
echo -e $newfile > docker-compose.yml

IFS=$OIFS
tag="cms-content:"${newVersion}
echo "4.创建镜像文件 ${tag}"
docker build -t $tag .

echo "5.启动镜像"
docker-compose up -d