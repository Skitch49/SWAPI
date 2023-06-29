const express = require('express');
const starshipsController = require('../controllers/starship.controller');

const router = express.Router();

router.get('/', starshipsController.getAllStarships);
router.get('/:id', starshipsController.getStarshipById);
router.post('/', starshipsController.createStarship);
router.put('/:id', starshipsController.updateStarship);
router.delete('/:id', starshipsController.deleteStarship);

module.exports = router;