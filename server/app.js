require('dotenv').config();
const express = require('express');
const app = express();
const session = require('express-session'); // 로그인에 필요

const maria = require('./database/connect/maria');
maria.connect((err) => {
  if (err) throw err;
  console.log('Connected'); // mariadb 연동
});
// 라우터 변수
const indexRouter = require('./routes/index');

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

// 디비접속정보 =>이거 maria.js로 분리함
const db = {
  database: 'dev',
  connectionLimit: 10,
  host: process.env.host,
  user: 'root',
  password: 'mariadb',
};

const dbPool = require('mysql').createPool(db);

// 라우터 연결
app.use('/', indexRouter);

// 임시 작성 코드: 게시물에 필요한 정보들 나옴
// const posts = require('./tmp_posts'); tmp_post삭제함

// app.get('/api/posts', (req, res) => {
//   res.send(posts);
// });

// 로그인여부확인 임시코드
// app.post('/api/login', async (request, res) => {
//   request.session['email'] = 'iwbm@gmail.com';
//   res.send('ok');
// });

// app.post('/api/logout', async (request, res) => {
//   request.session.destroy();
//   res.send('ok');
// });

// const sql = require('./sql.js');

// app.post('/api/:alias', async (reqest, res) => {
//   try {
//     res.send(await req.db(reqest.params.alias));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

// app.post('/apirole/:alias', async (reqest, res) => {
//   if (!reqest.session.email) {
//     return res.status(401).send({ error: 'You need to login' });
//   }
//   try {
//     res.send(await req.db(reqest.params.alias));
//   } catch (err) {
//     res.status(500).send({
//       error: err,
//     });
//   }
// });

const req = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY') console.log(error);
          resolve({
            error,
          });
        } else resolve(rows);
      })
    );
  },
};
