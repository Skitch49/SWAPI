const Vehicule = require('../models/vehicule.model');

// Récupère tous les vehicules
exports.getAllVehicules = (req, res) => {
    Vehicule.find()
    .then(vehicules => {
      res.json(vehicules);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch vehicules' });
    });
};

// Récupère les informations d'un vehicule par son ID
exports.getVehiculeById = (req, res) => {
  const vehiculeId = req.params.id;
  Vehicule.findById(vehiculeId)
    .then(vehicule => {
      if (!vehicule) {
        res.status(404).json({ error: 'Vehicule not found' });
      } else {
        res.json(vehicule);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch vehicule' });
    });
};

// Crée un nouveau vehicule
exports.createVehicule = (req, res) => {
  const vehiculeData = req.body;
  Vehicule.create(vehiculeData)
    .then(vehicule => {
      res.status(201).json(vehicule);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create vehicule' });
    });
};

// Met à jour les informations d'un vehicule par son ID
exports.updateVehicule = (req, res) => {
  const vehiculeId = req.params.id;
  const vehiculeData = req.body;
  Vehicule.findByIdAndUpdate(vehiculeId, vehiculeData, { new: true })
    .then(vehicule => {
      if (!vehicule) {
        res.status(404).json({ error: 'Vehicule not found' });
      } else {
        res.json(vehicule);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update vehicule' });
    });
};

// Supprime un vehicule par son ID
exports.deleteVehicule = (req, res) => {
  const vehiculeId = req.params.id;
  Vehicule.findByIdAndDelete(vehiculeId)
    .then(vehicule => {
      if (!vehicule) {
        res.status(404).json({ error: 'Vehicule not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete vehicule' });
    });
};
