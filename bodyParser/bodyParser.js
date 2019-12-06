var express = require('express');
var bodyParser = require('body-parser');

const loaclPost  = 8082;
var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/login.io',(req, res)=>{
    console.log('the world');
    console.log(req);
    res.send('Hello World');
    res.end();
});

app.listen(loaclPost,()=>{
    console.log('http://127.0.0.1:%s')
});
