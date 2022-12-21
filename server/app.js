require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session'); // 로그인에 필요

const maria = require('./database/connect/maria');
maria.conn.connect((err) => {
  if (err) throw err;
  console.log('Connected'); // mariadb 연동
});
// 라우터 변수
const indexRouter = require('./routes/index');
const userRouter=require('./routes/user.js');

app.listen(3000, () => {
  console.log('Server started. port 3000.');
});

app.use(
  session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // 쿠기 유효 시간: 1시간
    },
  })
);

// 라우터 연결
app.use('/', indexRouter);
app.use('/user',userRouter); 

