* how to build
```
go get github.com/gorilla/websocket
go get github.com/garyburd/redigo/redis
go get github.com/dgrijalva/jwt-go
```

src下
```
mkdir -p golang.org/x/
```
然后把 https://github.com/golang/net co 到这个目录下
然后再
```
go get github.com/gin-gonic/gin
cd server
go build
./server
```


#在react/src下 npm install
#npm install webpack -g
#
#zhj 2015-11-16 22:06:49
#完后在react目录下  webpack —watch ，这个命令是编译react下的js保存到 webclient/statis/js/目录下 
#
#zhj 2015-11-16 22:06:58
#文件叫 webClient.js
#
#ERROR in ./config/routes.js
#Module not found: Error: Cannot resolve module 'components/Login' in /home/chylli/study/golang/src/github.com/user/ChatChat/webClient/react/src/config
# @ ./config/routes.js 36:25-52
# npm WARN install Couldn't install optional dependency: Unsupported
#
#Benx(23881302) 17:46:58 
#webclient 那里是react + react-router + redux, 用webpack打包编译
#Benx(23881302) 17:47:08 
#server那里是 go-gin
