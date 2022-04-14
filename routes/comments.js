const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/Chirper/:id/post/', commentsCtrl.create);




module.exports = router;