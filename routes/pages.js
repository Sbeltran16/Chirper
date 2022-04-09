const express = require('express');
const router = express.router();
const pagesCtrl = require('../controllers/pages');

router.get('/', pagesCtrl.index);

router.get('/new', pagesCtrl.new);




module.exports = router;

