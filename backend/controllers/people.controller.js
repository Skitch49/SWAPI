const People = require('../models/people.model');

// Récupère tous les peoples
exports.getAllPeoples = (req, res) => {
    People.find()
    .then(peoples => {
      res.json(peoples);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch people' });
    });
};

// Récupère les informations d'un people par son ID
exports.getPeopleById = (req, res) => {
  const peopleId = req.params.id;
  People.findById(peopleId)
    .then(people => {
      if (!people) {
        res.status(404).json({ error: 'People not found' });
      } else {
        res.json(people);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch people' });
    });
};

// Crée un nouveau people
exports.createPeople = (req, res) => {
  const peopleData = req.body;
  People.create(peopleData)
    .then(people => {
      res.status(201).json(people);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create people' });
    });
};

// Met à jour les informations d'un people par son ID
exports.updatePeople = (req, res) => {
  const peopleId = req.params.id;
  const peopleData = req.body;
  People.findByIdAndUpdate(peopleId, peopleData, { new: true })
    .then(people => {
      if (!people) {
        res.status(404).json({ error: 'People not found' });
      } else {
        res.json(people);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update people' });
    });
};

// Supprime un people par son ID
exports.deletePeople = (req, res) => {
  const peopleId = req.params.id;
  People.findByIdAndDelete(peopleId)
    .then(people => {
      if (!people) {
        res.status(404).json({ error: 'People not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete people' });
    });
};
