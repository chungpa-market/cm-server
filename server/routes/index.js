const express = require('express');
const router = express.Router();

// 디비
const maria = require('../database/connect/maria');

// 홈화면 get
router.get('/', (req, res, next) => {
  res.send('HI');
});

// 도서정보 팔/살/나 구분 조회
// 팔아요 물건리스트
router.get('/products/sell/', (req, res) => {
  maria.query('SELECT * from t_post WHERE tags=1', (err, rows, fields) => {
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
// 팔아요->물건선택
router.get('/products/sell/:id', (req, res) => {
  const { id } = req.params;
  maria.query(
    'SELECT * from t_post WHERE tags=1 AND id=' + id,
    (err, rows, fields) => {
      try {
        res.send(rows);
      } catch (err) {
        console.log('err : ' + err);
        res.status(500).send({
          error: err,
        });
      }
    }
  );
});
router.get('/products/buy/', (req, res) => {
  maria.query('SELECT * from t_post WHERE tags=2', (err, rows, fields) => {
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
router.get('/products/buy/:id', (req, res) => {
  const { id } = req.params;
  maria.query(
    'SELECT * from t_post WHERE tags=2 AND id=' + id,
    (err, rows, fields) => {
      try {
        res.send(rows);
      } catch (err) {
        console.log('err : ' + err);
        res.status(500).send({
          error: err,
        });
      }
    }
  );
});
router.get('/products/share/', (req, res) => {
  maria.query('SELECT * from t_post WHERE tags=3', (err, rows, fields) => {
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
router.get('/products/share/:id', (req, res) => {
  const { id } = req.params;
  maria.query(
    'SELECT * from t_post WHERE tags=3 AND id=' + id,
    (err, rows, fields) => {
      try {
        res.send(rows);
      } catch (err) {
        console.log('err : ' + err);
        res.status(500).send({
          error: err,
        });
      }
    }
  );
});
// 메인->물건선택
router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  maria.query('SELECT * from t_post WHERE id=' + id, (err, rows, fields) => {
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

// 임시로 추가한 글 등록

module.exports = router;