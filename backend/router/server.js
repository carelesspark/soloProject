const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ message : '서버 연동 완료' });
  });

  module.exports = router;
  // 라우터 모듈화