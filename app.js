const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session=require('express-session');

const mainRouter = require('./routes/main');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout')

const app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/views/login.html")
})

app.use('/main', mainRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/logout',logoutRouter);
  
module.exports = app;