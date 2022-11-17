var express=require('express');
var router=express.Router();

var db=require('../db-connect');

router.get('/',function(req,res,next){
    res.render('join'); 
}); 

router.post('/',function(req,res,next){
    var userId=req.body['userId'];
    var userPw=req.body['userPw'];
    var userPwRe=req.body['userPwRe'];
    var username=req.body['name'];
    var nickname=req.body['nickname'];
    var email=req.body['email'];
    var phone=req.body['phone'];

    if(userPw==userPwRe){
        db.query('insert into t_user (login_id,password,name,nickname,email,phone) values(?,?,?,?,?,?);',[userId,userPw,username,
            nickname,email,phone],function(err,rows,fields){
            if(!err){
                res.send('success');
            }
            else{
                res.send('err: '+err); 
            }
        });
    }else{
        res.send('password not match'); 
    }
})

module.exports=router; 