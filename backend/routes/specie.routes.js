const express = require('express');
const speciesController = require('../controllers/specie.controller');

const router = express.Router();

router.get('/', speciesController.getAllSpecies);
router.get('/:id', speciesController.getSpecieById);
router.post('/', speciesController.createSpecie);
router.put('/:id', speciesController.updateSpecie);
router.delete('/:id', speciesController.deleteSpecie);

module.exports = router;