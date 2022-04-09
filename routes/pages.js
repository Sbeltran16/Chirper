const express = require('express');
const router = express.Router();
const pagesCtrl = require('../controllers/pages');

router.get('/new', pagesCtrl.new);




module.exports = router;

