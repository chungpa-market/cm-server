const maria = require('mysql');
const db = {
  host: 'localhost',
  port: 8000, //원래 3306이었으나 잠시 테스트를 위해 8000으로 바꾸었습니다. 
  user: 'root',
  password: 'mariadb',
  database: 'dev',
};
const conn = maria.createConnection(db);

module.exports.db = db;
module.exports.conn = conn;

// createConnection -> createPool => 다시 cC로 변경-> 기존 connection 확인 코드 때문에???
// db 변수 생성 후 기존 구조 변경