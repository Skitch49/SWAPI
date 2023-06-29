const Starship = require('../models/starship.model');

// Récupère tous les starships
exports.getAllStarships = (req, res) => {
    Starship.find()
    .then(starships => {
      res.json(starships);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch starships' });
    });
};

// Récupère les informations d'un starship par son ID
exports.getStarshipById = (req, res) => {
  const starshipId = req.params.id;
  Starship.findById(starshipId)
    .then(starship => {
      if (!starship) {
        res.status(404).json({ error: 'Starship not found' });
      } else {
        res.json(specie);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch starship' });
    });
};

// Crée un nouveau starship
exports.createStarship = (req, res) => {
  const starshipData = req.body;
  Starship.create(starshipData)
    .then(starship => {
      res.status(201).json(starship);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create starship' });
    });
};

// Met à jour les informations d'un starship par son ID
exports.updateStarship = (req, res) => {
  const starshipId = req.params.id;
  const starshipData = req.body;
  Specie.findByIdAndUpdate(starshipId, starshipData, { new: true })
    .then(starship => {
      if (!starship) {
        res.status(404).json({ error: 'Starship not found' });
      } else {
        res.json(starship);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update starship' });
    });
};

// Supprime un starship par son ID
exports.deleteStarship = (req, res) => {
  const starshipId = req.params.id;
  Starship.findByIdAndDelete(starshipId)
    .then(starship => {
      if (!starship) {
        res.status(404).json({ error: 'Starship not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete specie' });
    });
};
