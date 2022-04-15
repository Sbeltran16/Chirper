const express = require('express');
const router = express.Router();
const chirpsController = require('../controllers/chirps');

router.get('/home', chirpsController.index);
router.get('/create', chirpsController.new);
router.post('/', chirpsController.create);
router.get('/chirp/:id', chirpsController.show);
router.delete('/:id', chirpsController.delete);
router.edit('/chirps/:id/edit', chirpsController.edit);
module.exports = router;

