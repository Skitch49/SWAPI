const express = require('express');
const peoplesController = require('../controllers/people.controller');

const router = express.Router();

router.get('/', peoplesController.getAllPeoples);
router.get('/:id', peoplesController.getPeopleById);
router.post('/', peoplesController.createPeople);
router.put('/:id', peoplesController.updatePeople);
router.delete('/:id', peoplesController.deletePeople);

module.exports = router;