const express = require('express');
const router = express.Router();
const chirpsController = require('../controllers/chirps');

router.get('/home', chirpsController.index);
router.get('/create', chirpsController.new);
router.post('/', chirpsController.create);
router.get('/chirp/:id', chirpsController.show);
router.delete('/:id', chirpsController.delete);
router.get('/chirps/:id/edit', chirpsController.edit);
router.put('/chirps/:id', chirpsController.update);
module.exports = router;

