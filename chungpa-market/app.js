const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');
const bodyParser=require('body-parser'); 
const cookieParser=require('cookie-parser'); 
const expressSession=require('express-session'); 

const app = express();
app.set('port', process.env.PORT || 3000);

// cookie and session assign middleWare
app.use(cookieParser());
// 세션세팅
app.use(
    expressSession({
      secret: "my key",
      resave: true,
      saveUninitialized: true,
      cookie:{secure:false}
    })
  );

dotenv.config();

app.get('/', (req, res) => {
    fs.readFile('./html/index.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
    //res.sendFile(path.join(__dirname, './html/product-detail.html'));
});

//html에서 렌더링하여 데이터 전달받기 위해 추가한 코드 
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile); 

//body parser 설정 (html에서 post방식으로 데이터 전달받기 위함)
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}));

/*
//라우팅 
var loginRouter=require('./routes/login');
var registerRouter=require('./routes/join.js'); 
app.use('/login',loginRouter); 
//로그아웃 
app.get('/logout',function(req,res){
    req.session.destroy(function(err){
        res.redirect('/'); 
    });
});
app.use('/join',registerRouter); 
*/
var userRouter=require('./routes/user.js');
app.use('/user',userRouter); 

var searchRouter=require('./routes/search.js');
app.use('/search', searchRouter); 

//라우팅 위해 잠시 주석처리 해둠. 
/*
app.get('/login', (req, res) => {
    fs.readFile('./html/login.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});*/

/*
app.get('/join', (req, res) => {
    fs.readFile('./html/registration.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/mypage', (req, res) => {
    fs.readFile('./html/my-page.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/detail', (req, res) => {
    fs.readFile('./html/product-detail.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/write', (req, res) => {
    fs.readFile('./html/write.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/wish', (req, res) => {
    fs.readFile('./html/wish-list.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/history', (req, res) => {
    fs.readFile('./html/transaction-history.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});*/

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});