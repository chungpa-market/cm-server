const mariadb = require('mysql');

const db = mariadb.createConnection({
    host: '192.168.219.103',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'dev'
});

module.exports = db;

// router.get('/search', function(req, res) {
//     db.query(`SELECT * from t_product`, function(err, rows, fields) {
//         if(!err){
//             res.send(rows);
//         } else {
//             console.log(err);
//             res.send(err);
//         };
//     });
// });