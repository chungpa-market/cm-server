const express=require('express'); 
const app=express(); 
const session = require('express-session'); 
const fs=require('fs'); //file system. directory에 접근할 수 있도록 함. 

const path=require('path')

app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views')); 

app.use(session({
    secret: 'secret code',
    resave: false,//request 요청이 왔을때 session의 수정사항이 생기지 않더라도 session을 다시 설정하는것. (필요없으므로 false로 설정)
    saveUninitialized: false, //session에 저장한 내역이 없더라도 session을 항상 재설정할것인가에 대한 설정(필요없어서 false)
    cookie:{
        secure:false,
        maxAge:1000*60*60 //쿠키 유효시간 1시간 설정 
    }
}));

const server=app.listen(3000,()=>{
    console.log('Server started. port 3000'); 
});

var loginRouter=require('./routes/login');
var joinRouter=require('./routes/join');
var showAllDataRouter=require('./routes/show-all-data');

app.use('/login',loginRouter);
app.use('/join',joinRouter); 
app.use('/show-all-data',showAllDataRouter); 


/*
var mysql=require('mysql');
let sql=require('./sql.js'); 

const db = {
    database:"dev",
    connectionLimit:10,
    host:"127.0.0.1",
    user:"root",
    password:"mariadb",
    port:8000
};

const dbPool=require('mysql').createPool(db); 

app.post('../test_client/join',async (req,res)=>{
    var name=req.body.user_name; 
    var id=req.body.user_id; 
    var pwd=req.body.user_password; 
    var idoverlap=await mysql.queryreturn(`select * from t_user where login_id="${id}" 
    and password= "${pwd}";`)

    if(idoverlap==0){
        var requery=await mysql.queryreturn(`insert into t_user(name,login_id,password) values("${name}","${id}","${pwd}")`)
        if (reqquery==0){
            console.log("다시 시도하세요")
        }
        else{
            console.log("회원가입 성공")
        }
    }
    else{
        console.log("이미 등록된 아이디가 존재")
    }
}); 
*/


/*
app.use(session({
    secret: 'secret code',
    resave: false,//request 요청이 왔을때 session의 수정사항이 생기지 않더라도 session을 다시 설정하는것. (필요없으므로 false로 설정)
    saveUninitialized: false, //session에 저장한 내역이 없더라도 session을 항상 재설정할것인가에 대한 설정(필요없어서 false)
    cookie:{
        secure:false,
        maxAge:1000*60*60 //쿠키 유효시간 1시간 설정 
    }
}));

const server=app.listen(3000,()=>{
    console.log('Server started. port 3000'); 
});

let sql=require('./sql.js'); 

fs.watchFile(__dirname+'/sql.js',(curr,prev)=>{
    console.log('sql 변경시 재시작 없이 반영되도록 함.'); 
    delete require.cache[require.resolve('./sql.js')];
    sql=require('./sql.js'); 
}); //변경사항이 일어나는 것을 감지 가능 

const db = {
    database:"dev",
    connectionLimit:10,
    host:"127.0.0.1",
    user:"root",
    password:"mariadb",
    port:8000
};

const dbPool=require('mysql').createPool(db); 

app.post('/api/login',async(request,res)=>{
    request.session['email']='jinyoung@gmail.com';
    res.send('ok'); 
});

app.post('/api/logout',async(request,res)=>{
    request.session.destroy();
    res.send('ok'); 
});



app.post('/apirole/:alias',async(request,res)=>{
    if(!request.session.email){
        return res.status(401).send({error:'You need to login.'}); 
    }

    try{
        res.send(await req.db(request.params.alias)); 
    }catch(error){
        res.status(500).send({
            error:err
        });
    }
});


app.post('/api/:alias',async(request,res)=>{
    try{
        res.send(await req.db(request.params.alias)); 
    }catch(error){
        res.status(500).send({
            error:err
        });
    }
});



const req = { 
    async db(alias, param = [], where = '' ) {
        return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where , param, (error, rows) => {
             if ( error ) {
                if ( error.code != 'ER_DUP_ENTRY')
                    console.log(error); 
                resolve({
                    error
                });
             } else resolve(rows);
        }));
     } 
};
*/
