var express=require('express');
var router=express.Router();
var db=require('../db-connect');
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


/*
//로그아웃 
router.get('/logout',function(req,res){
    req.session.destroy(function(err){
        res.redirect('/'); 
    });
});


//회원가입 - 아직 구현 덜했음. 
router.get('/join', (req, res) => {
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
    
    if (username && userPwd && userPwdChk) {
        
        db.query('SELECT * FROM t_user WHERE name = ?', [username], function(error, results, fields) { // DB에 같은 이름의 회원아이디가 있는지 확인
            if (error) throw error;
            if (results.length <= 0 && userPwd == userPwdChk) {     // DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우 
                db.query('INSERT INTO t_user (username, password) VALUES(?,?)', [username, password], function (error, data) {
                    if (error) throw error2;
                    response.send(`<script type="text/javascript">alert("회원가입이 완료되었습니다!");
                    document.location.href="/";</script>`);
                });
            } else if (password != password2) {                     // 비밀번호가 올바르게 입력되지 않은 경우
                response.send(`<script type="text/javascript">alert("입력된 비밀번호가 서로 다릅니다."); 
                document.location.href="/user/join";</script>`);    
            }
            else {                                                  // DB에 같은 이름의 회원아이디가 있는 경우
                response.send(`<script type="text/javascript">alert("이미 존재하는 아이디 입니다."); 
                document.location.href="/user/join";</script>`);    
            }            
        });

    } else {        // 입력되지 않은 정보가 있는 경우
        response.send(`<script type="text/javascript">alert("입력되지 않은 정보가 있습니다."); 
        document.location.href="/user/join";</script>`);
    }

});


//마이페이지 
router.get('/', (req, res) => {
    res.render('../html/registration.html'); 
});
*/

module.exports = router;


