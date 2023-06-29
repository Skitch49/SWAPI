const Planet = require('../models/planet.model');

// Récupère toutes les planets
exports.getAllPlanets = (req, res) => {
  Planet.find()
    .then(planets => {
      res.json(planets);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch planets' });
    });
};

// Récupère les informations d'un planet par son ID
exports.getPlanetById = (req, res) => {
  const planetId = req.params.id;
  Planet.findById(planetId)
    .then(planet => {
      if (!planet) {
        res.status(404).json({ error: 'Planet not found' });
      } else {
        res.json(planet);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch planet' });
    });
};

// Crée une nouvelle planet
exports.createPlanet = (req, res) => {
  const planetData = req.body;
  Planet.create(planetData)
    .then(planet => {
      res.status(201).json(planet);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create planet' });
    });
};

// Met à jour les informations d'une planet par son ID
exports.updatePlanet = (req, res) => {
  const planetId = req.params.id;
  const planetData = req.body;
  Planet.findByIdAndUpdate(planetId, planetData, { new: true })
    .then(planet => {
      if (!planet) {
        res.status(404).json({ error: 'Planet not found' });
      } else {
        res.json(planet);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update planet' });
    });
};

// Supprime une planet par son ID
exports.deletePlanet = (req, res) => {
  const planetId = req.params.id;
  Planet.findByIdAndDelete(planetId)
    .then(planet => {
      if (!planet) {
        res.status(404).json({ error: 'Planet not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete planet' });
    });
};
