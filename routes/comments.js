const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');

// router.post('/Chirper/chirps/:id/comments', commentsController.create);
router.get('/Chirper/chirps/:id/comments', commentsController.index);
router.post('Chirper/chirps/:id/comments', commentsController.create);


module.exports = router;