let express = require('express')

let bodyParser = require('body-parser')

let router = require('./router')

let serverConfig = require('./server-config')

let port = serverConfig.port

let app = express()

app.use('/',bodyParser.urlencoded({ extended: false }))

app.use('/static',express.static('public'))

app.use(router)

app.listen(port,()=>{
    console.log(`服务器在${port}端口启动成功!`)
})