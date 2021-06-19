var router = require('express').Router(); // express에서 라우터 쓰는 방법


router.get('/sports', function(req, res){
    res.send('스포츠 게시판');
});

router.get('/game', function(req, res){
    res.send('게임 게시판');
});

module.exports = router; // 내보내는거 react때 export default 썼지? 