var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session=require('express-session');

var mainRouter = require('./routes/main');
var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout')

var app=express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'js')));

app.use(session({
    secret:'hackathon',//보안
    resave:false,
    saveUninitialized:true//익명
}));


app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/login', loginRouter);
app.use('/logout',logoutRouter);
app.use('/register', registerRouter);

app.use(function(req, res, next) {
    next(createError(404));
  });

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
module.exports = app;