const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// 자동으로 req에 body 속성 추가 : url에 접근 하고싶다면 req.body.urls : encoding 또한 default로 UTF-8

app.use(cookieParser());

app.use(express.urlencoded({ extended: true })); 
// 중첩 객체표현 허용. 객체 안에 객체 파싱 true

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../frontend', 'build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
});

const port = 3000;

app.listen(port, () => console.log(`Server Listening on ${port}`));