'use strict'

const express = require('express');
const app = express();


app.set('views', './src/views');
app.set('view engine', 'ejs');


const home = require('./src/routes/home');
app.use('/', home); // use -> 미들웨어를 등록해주는 메소드

app.use(express.static(`${__dirname}/src/public`));
// 현재 app.js가 있는 위치가 dirname이다. 그러므로 dirname안에 src안에 public폴더를
// 정적경로로 추가해준다는 의미이다.

module.exports = app;
