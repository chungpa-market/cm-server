var express=require('express');
var router=express.Router();
var db=require('../DBconn');
var path=require('path');
var url = require('url');
var http = require('http');
var fs = require('fs');
const sanitize=require('sanitize');
const { Sequelize } = require('sequelize');
//const { request } = require('http');
const { and, or, like, not } = Sequelize.Op;

// var _url = "http://localhost:3000/"
// var queryData = url.parse(_url, true).query;
// console.log(queryData);

router.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname, '../html/login.html'));
    res.render('../html/index.html'); 
});

router.post('/', function(req, res){
    var queryData = req.body.query;
    //var _url = http.request.url;
    //var queryData = url.parse(_url, true).query;
    console.log(queryData);
    db.query(`SELECT * FROM t_post WHERE title LIKE ?`, '%' + queryData + '%', function(err, result){
        if(err){
            console.log(err);
        } else {
            if(result.length === 0) {
                res.json({
                    result: false,
                    msg: '검색 결과 없음'
                });
            } else {
                res.json({
                    result: true,
                    msg: '조회 성공',
                    list: result
                });
            }
        }
        console.log(result);
    });

});

module.exports = router;

// var router = http.createServer(function(req, res) {
//     var _url = http.request.url;
//     var queryData = url.parse(_url, true).query;
//     console.log(queryData.query);
//     db.query(`SELECT * FROM t_post WHERE title LIKE ?`, '%' + queryData + '%', function(err, result){
//         console.log(result);
//     });
// })

// db.query(`SELECT * FROM t_post WHERE title LIKE ?`, '%' + queryData + '%', function(err, result){
//     console.log(result);
// });