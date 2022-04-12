const express = require('express');
const router = express.Router();
const pagesCtrl = require('../controllers/pages');

router.get('/create', pagesCtrl.new);
router.get('/home', pagesCtrl.index);
router.post('/', pagesCtrl.create);
router.get('/:id/post', pagesCtrl.show);


module.exports = router;

