var mysql=require('mysql');

var connection=mysql.createConnection({
    database:"dev",
    connectionLimit:10,
    host:"127.0.0.1",
    user:"root",
    password:"mariadb",
    port:8000
});

module.exports=connection; 
