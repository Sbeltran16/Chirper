const express = require('express');
const router = express.router();
const postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);

