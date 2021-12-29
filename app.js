const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'date',
});

conn.connect();

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/public/views/login.html");
});
app.get("/register.html", function (req, res) {
    res.sendFile(__dirname + "/public/views/register.html");
});
app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/public/views/login.html");
});
app.get("/home.html", function (req, res) {
    res.sendFile(__dirname + "/public/views/home.html");
});
app.get("/map.html", function (req, res) {
    res.sendFile(__dirname + "/public/views/map.html");
});


app.post("/register",function(req,res){
    const param =[req.body.id,req.body.pswd1];
    conn.query("INSERT INTO users(id,password) VALUES(?,?)",param,function(err,result,fields){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        console.log('inserted');
        res.redirect('/');
    })
});
app.post('/login', function(req, res){
    var userId= req.body.id;
    var pw=req.body.pw;
    
    conn.query("SELECT id,password FROM users WHERE id=?",userId,function(err,results){
        if(err){
            console.log(err);
        }
        if(!results[0]){
            console.log("등록되지 않은 사용자입니다");
            res.redirect('/');
        }
        else{
            var user = results[0];
            if(user.password==pw){
                res.redirect('/home.html');
                return;
            }
            else{
                console.log("아이디 또는 비밀번호가 잘못 입력되었습니다.")
                res.redirect('/');
            }
        }
    

    })
});

module.exports = app;