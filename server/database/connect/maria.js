const maria = require('mysql');
const conn = maria.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mariadb',
  database: 'dev',
});

module.exports = conn;

// 접속정보 확인
