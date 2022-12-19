const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

const app = express();
app.set('port', process.env.PORT || 3306);

dotenv.config();

app.get('/', (req, res) => {
    fs.readFile('./html/index.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
    //res.sendFile(path.join(__dirname, './html/product-detail.html'));
});

app.get('/login', (req, res) => {
    fs.readFile('./html/login.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/join', (req, res) => {
    fs.readFile('./html/registration.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/mypage', (req, res) => {
    fs.readFile('./html/my-page.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/detail', (req, res) => {
    fs.readFile('./html/product-detail.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/write', (req, res) => {
    fs.readFile('./html/write.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/wish', (req, res) => {
    fs.readFile('./html/wish-list.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.get('/history', (req, res) => {
    fs.readFile('./html/transaction-history.html', function(err, data) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(data);
    });
});

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});