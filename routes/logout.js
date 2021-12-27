var express = require('express');
const dbcp=require('../db/dbcp');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  req.session.destroy((err)=>{
    res.redirect('/');//로그아웃하면 항상 홈으로 돌아감
  });
});

module.exports = router;