const Transport = require('../models/transport.model');

// Récupère tous les transports
exports.getAllTransports = (req, res) => {
    Transport.find()
    .then(transports => {
      res.json(transports);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch transports' });
    });
};

// Récupère les informations d'un transport par son ID
exports.getTransportById = (req, res) => {
  const transportId = req.params.id;
  Transport.findById(transportId)
    .then(transport => {
      if (!transport) {
        res.status(404).json({ error: 'Transport not found' });
      } else {
        res.json(transport);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch transport' });
    });
};

// Crée un nouveau transport
exports.createTransport = (req, res) => {
  const transportData = req.body;
  Transport.create(transportData)
    .then(transport => {
      res.status(201).json(transport);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create transport' });
    });
};

// Met à jour les informations d'un transport par son ID
exports.updateTransport = (req, res) => {
  const transportId = req.params.id;
  const transportData = req.body;
  Transport.findByIdAndUpdate(transportId, transportData, { new: true })
    .then(transport => {
      if (!transport) {
        res.status(404).json({ error: 'Transport not found' });
      } else {
        res.json(transport);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update transport' });
    });
};

// Supprime un transport par son ID
exports.deleteTransport = (req, res) => {
  const transportId = req.params.id;
  Transport.findByIdAndDelete(transportId)
    .then(transport => {
      if (!transport) {
        res.status(404).json({ error: 'Transport not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete transport' });
    });
};
