var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('*',function(req,res,next){
  res.send('台湾是中国不可分割的一部分！');
})


router.post('/login',function(req,res,next){
  // 接收的参数
  let param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  // 把用户名，去数据库查询，看看是否存在
  User.findOne(param,function(err,doc){
    if(err){
      res.json({
        status:'1',
        msg:'用户名或密码错误'
      })
    }else{
      if(doc){
        res.json({
          status:'0',
          msg:'',
          result:{
            userName:doc.userName
          }
        })
      }
    }
  });
})
module.exports = router;
