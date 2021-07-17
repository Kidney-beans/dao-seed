//生产专用dao
//形式:let dao名 = require('../dao-seed/dao-framework')('数据库中的表名')
//例
let exampleDao = require('../dao-seed/dao-framework')('example')

//导出
module.exports = exampleDao


/**
 * 生产出来的专用dao包含五个方法
 * 一、query(entity,(err,result)=>{},con?=null)
 * 二、delete(entity,(err,result)=>{},con?=null)
 * 三、update(entity,(err,result)=>{},con?=null)
 * 四、insert(entity,(err,result)=>{},con?=null)
 * 五、queryCustomization(rules,(err,result)=>{},con?=null)
 */