const maria = require('mysql');
const db = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'mariadb',
  database: 'dev',
};
const conn = maria.createConnection(db);

module.exports.db = db;
module.exports.conn = conn;

// createConnection -> createPool => 다시 cC로 변경-> 기존 connection 확인 코드 때문에???
// db 변수 생성 후 기존 구조 변경