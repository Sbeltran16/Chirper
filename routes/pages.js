const express = require('express');
const router = express.Router();
const pagesCtrl = require('../controllers/pages');

router.get('/new', pagesCtrl.new);
router.get('/', pagesCtrl.index);
router.post('/FrontPage', pagesCtrl.create);


module.exports = router;

