var router = require('express').Router(); // express에서 라우터 쓰는 방법


router.get('/shop/shirts', function(req, res){
    res.send('셔츠 파는 페이지입니다.');
});

router.get('/shop/pants', function(req, res){
    res.send('바지 파는 페이지입니다.');
});

module.exports = router; // 내보내는거 react때 export default 썼지? 