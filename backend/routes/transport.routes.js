const express = require('express');
const transportsController = require('../controllers/transport.controller');

const router = express.Router();

router.get('/', transportsController.getAllTransports);
router.get('/:id', transportsController.getTransportById);
router.post('/', transportsController.createTransport);
router.put('/:id', transportsController.updateTransport);
router.delete('/:id', transportsController.deleteTransport);

module.exports = router;