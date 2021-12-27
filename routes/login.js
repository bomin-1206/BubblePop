var express = require('express');
const dbcp=require('../db/dbcp');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('login');
});

router.post('/', async(req, res)=>{
  const {userId, password} = req.body;
  let result='';

  const conn=await dbcp.getConnection();
  const rows = await conn.query('select id, password from users where id=?',[userId])//?표에 들어갈 것은 다음 명령어? 배열에서 알려줌
  conn.end();

  if(rows.length==0){
    result='등록되지 않은 사용자 입니다.';
  }
  else {
    const db_user=rows[0];
    if(db_user.user_password==password){
      result='반갑습니다.';
      req.session.userId=userId;//req.session.는 정해져 있는 것, userId부분은 내가 정하는 것(변수 하나 지정, 변수 호출)
      res.redirect('/');
      return;
    }
    else
      result='아이디 또는 비밀번호가 잘못 입력되었습니다.';
  }
 
  res.render('login', {result:result});
});

module.exports = router;