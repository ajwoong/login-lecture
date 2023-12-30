'use strict'

const express = require('express');
const app = express();
//req.body를 잘 파싱해오기 위해서 모듈 설치한것임.

app.set('views', './src/views');
app.set('view engine', 'ejs');


const home = require('./src/routes/home/index.js');


app.use(express.static(`${__dirname}/src/public`));
// 현재 app.js가 있는 위치가 dirname이다. 그러므로 dirname안에 src안에 public폴더를
// 정적경로로 추가해준다는 의미이다.

app.use(express.json()); // 바디파서가 제이슨 데이터를 파싱해올수 있도록하기
app.use(express.urlencoded({extended: true}));
//url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결

app.use('/', home); // use -> 미들웨어를 등록해주는 메소드

module.exports = app;
