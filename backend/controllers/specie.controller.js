const Specie = require('../models/specie.model');

// Récupère tous les species
exports.getAllSpecies = (req, res) => {
    Specie.find()
    .then(species => {
      res.json(species);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch species' });
    });
};

// Récupère les informations d'un specie par son ID
exports.getSpecieById = (req, res) => {
  const specieId = req.params.id;
  Specie.findById(specieId)
    .then(specie => {
      if (!specie) {
        res.status(404).json({ error: 'Specie not found' });
      } else {
        res.json(specie);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch specie' });
    });
};

// Crée une nouvelle specie
exports.createSpecie = (req, res) => {
  const specieData = req.body;
  Specie.create(specieData)
    .then(specie => {
      res.status(201).json(specie);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create specie' });
    });
};

// Met à jour les informations d'une specie par son ID
exports.updateSpecie = (req, res) => {
  const specieId = req.params.id;
  const specieData = req.body;
  Specie.findByIdAndUpdate(specieId, specieData, { new: true })
    .then(specie => {
      if (!specie) {
        res.status(404).json({ error: 'Specie not found' });
      } else {
        res.json(specie);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update specie' });
    });
};

// Supprime une specie par son ID
exports.deleteSpecie = (req, res) => {
  const specieId = req.params.id;
  Specie.findByIdAndDelete(specieId)
    .then(specie => {
      if (!specie) {
        res.status(404).json({ error: 'Specie not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete specie' });
    });
};
