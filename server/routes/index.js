const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// 디비
const maria = require('../database/connect/maria');
const db = maria.db;
const dbPool = mysql.createPool(db);
const conn = maria.conn;

// 홈화면 get
router.get('/', (req, res, next) => {
  res.send('HI');
});

const sql = require('../sql.js');

// const req = {
//   async db(alias, param = [], where = '') {
//     return new Promise((resolve, reject) =>
//       dbPool.query(sql[alias].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != 'ER_DUP_ENTRY') {
//             console.log('err : ' + error);
//           }
//           resolve({
//             error,
//           });
//         } else resolve(rows);
//       })
//     );
//   },
// };

// app.get('/api/:alias', async (req, res) => {
//   try {
//     res.send(await req.db(req.params.alias));
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

// 도서정보 팔/살/나 구분 조회
// 제품리스트(게시글)
router.get('/api/products/:alias/', (req, res) => {
  conn.query(sql[req.params.alias].query, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

// 제품 상세
router.get('/api/products/sell/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

router.get('/api/products/buy/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

router.get('/api/products/share/:id', (req, res) => {
  const { id } = req.params;
  conn.query(sql['productDetail'].query + id, (err, rows, fields) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log('err : ' + err);
      res.status(500).send({
        error: err,
      });
    }
  });
});

module.exports = router;
