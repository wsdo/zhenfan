var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




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

      res.cookie('userId',doc.userId,{
        path:'/',
        maxAge:1000*60*60
      })

      res.cookie('userName',doc.userName,{
        path:'/',
        maxAge:1000*60*60
      })


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

// 判断当前用户是否登录
router.get("/checkLogin",function(req,res,next){
  if(req.cookies.userId){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.userName
    })
  }else{
    res.json({
      status:'1',
      msg:'未登录',
      result:''
    })
  }
})

router.get('*',function(req,res,next){
  res.send('台湾是中国不可分割的一部分！');
})
module.exports = router;
