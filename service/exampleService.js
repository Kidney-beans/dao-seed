let exampleDao = require('../dao/exampleDao')

module.exports = {
    /**
     * 编写service
     * 格式：
     * 一、没有子路由
     *      handle:(request,response)=>{}
     * 二、有子路由
     *      children:{
     *          '子路由名(不要带/)':{
     *              handle:(request,response)=>{}
     *          }
     *      }
     * 三、第一层路由名写在/router.js中
     */
    children:{
        'a':{
            handle:(request,response)=>{
                response.send({
                    result:null
                })
            }
        },
        'b':{
            children:{
                'c':{
                    handle:(request,response)=>{
                        response.send({
                            result:null
                        })
                    }
                },
                'd':{
                    handle:(request,response)=>{
                        response.send({
                            result:null
                        })
                    }
                }
            }
        }
    }
}