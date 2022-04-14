const express = require('express');
const router = express.Router();
const pagesCtrl = require('../controllers/pages');

router.get('/home', pagesCtrl.index);
router.get('/create', pagesCtrl.new);
router.post('/', pagesCtrl.create);
router.get('/:id/post', pagesCtrl.show);
router.delete('/:id', pagesCtrl.delete);

module.exports = router;

