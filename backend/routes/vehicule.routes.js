const express = require('express');
const vehiculesController = require('../controllers/vehicule.controller');

const router = express.Router();

router.get('/', vehiculesController.getAllVehicules);
router.get('/:id', vehiculesController.getVehiculeById);
router.post('/', vehiculesController.createVehicule);
router.put('/:id', vehiculesController.updateVehicule);
router.delete('/:id', vehiculesController.deleteVehicule);

module.exports = router;