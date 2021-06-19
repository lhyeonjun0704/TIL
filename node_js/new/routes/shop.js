var router = require('express').Router(); // express에서 라우터 쓰는 방법

// 미들웨어를 넣고 싶을 때는 /shirts와 function 사이에 check_login 등 미들웨어 적용하면 됨.
// function login_success(req, res, next){
//     if(req.user){
//         next();
//     } else{
//         res.send('로그인 해주세요.');
//     }
// }

// 하지만 더 쉬운 방법이 있다.
// router.use(login_success);
// 세부라우트만 설정도 가능하다
// router.use('/shirts', login_success);


router.get('/shirts', function(req, res){
    res.send('셔츠 파는 페이지입니다.');
});

router.get('/pants', function(req, res){
    res.send('바지 파는 페이지입니다.');
});

module.exports = router; // 내보내는거 react때 export default 썼지? 