let express = require('express')

let router = express.Router()

let routeMap = {
    //添加路由
    //键值为第一层路由名
    'example':require('./service/exampleService')
}

function bindRoute(routeMap,prePath){
    for(let item in routeMap){
        prePath.push(item)
        if('children' in routeMap[item] && routeMap[item].children){
            bindRoute(routeMap[item].children,prePath)
        }
        else{
            router.use(`/${prePath.join('/')}`,routeMap[item].handle)
        }
        prePath.pop()
    }
}

bindRoute(routeMap,[])

module.exports = router