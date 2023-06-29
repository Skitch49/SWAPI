const express = require('express');
const planetsController = require('../controllers/planet.controller');

const router = express.Router();

router.get('/', planetsController.getAllPlanets);
router.get('/:id', planetsController.getPlanetById);
router.post('/', planetsController.createPlanet);
router.put('/:id', planetsController.updatePlanet);
router.delete('/:id', planetsController.deletePlanet);

module.exports = router;