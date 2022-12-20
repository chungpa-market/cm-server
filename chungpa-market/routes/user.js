var express=require('express');
var router=express.Router();
var db=require('../DBconn');
var path=require('path')

//로그인 
router.get('/login', (req, res) => {
    //res.sendFile(path.join(__dirname, '../html/login.html'));
    res.render('../html/login.html'); 
});

router.post('/login',function(req,res,next){
    //req.body 못 읽어오는 TypeError 문제 해결-> bodyParser 설정을 여기다 하면 안되고 app.js에 해야함...
    //이유는? 모르겠음.>~!~!~! 
    var id=req.body['id-field']; 
    var pwd=req.body['password-field']; 
    console.log(req.body); 
    console.log(id);
    console.log(pwd);

    db.query('select * from t_user where login_id=\''+id+'\' and password=\''+pwd+'\''
    ,function(err,rows,fields){
        if(!err){
           if (rows.length>0){
                req.session.id=id; 
                req.session.save(function() {
                    res.redirect(`/`); //제대로 로그인되면 홈으로 redirect. 
                }); 
           } 
           else{ //아무것도 입력되지 않을시 or 아이디/비번 db에 없을시 alert 메시지 띄우기 
                res.send(`<script type="text/javascript">alert("아이디와 비밀번호를 입력하세요!"); document.location.href="/login";</script>`);  
           }
        }
        else{
            console.log('query error: '+err); 
        }
    });
});


//로그아웃 
router.get('/logout',function(req,res){
    req.session.destroy(function(err){
        res.redirect('/'); 
    });
});


//회원가입 - 아직 구현 덜했음. 
router.get('/join', (req, res) => {
    //res.sendFile(path.join(__dirname, '../html/login.html'));
    res.render('../html/registration.html'); 
});

router.post('/join',function(req,res,next){
    var userid=req.body['id'];
    var userPwd=req.body['password'];
    var userPwdChk=req.body['check-password'];
    var username=req.body['username'];
    var phone=req.body['phone-number']; 
    var email=req.body['email']; 

    console.log(req.body); 
    /*
    console.log(userid); 
    console.log(userPwd); 
    console.log(userPwdChk); 
    console.log(username); 
    console.log(phone);
    //console.log(email); */
    if(userPwd==userPwdChk){
        res.send('success'); 
    }

});

module.exports = router;
