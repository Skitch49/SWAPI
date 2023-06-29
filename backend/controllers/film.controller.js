const Film = require('../models/film.model');

// Récupère tous les films
exports.getAllFilms = (req, res) => {
  Film.find()
    .then(films => {
      res.json(films);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch films' });
    });
};

// Récupère les informations d'un film par son ID
exports.getFilmById = (req, res) => {
  const filmId = req.params.id;
  Film.findById(filmId)
    .then(film => {
      if (!film) {
        res.status(404).json({ error: 'Film not found' });
      } else {
        res.json(film);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to fetch film' });
    });
};

// Crée un nouveau film
exports.createFilm = (req, res) => {
  const filmData = req.body;
  Film.create(filmData)
    .then(film => {
      res.status(201).json(film);
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to create film' });
    });
};

// Met à jour les informations d'un film par son ID
exports.updateFilm = (req, res) => {
  const filmId = req.params.id;
  const filmData = req.body;
  Film.findByIdAndUpdate(filmId, filmData, { new: true })
    .then(film => {
      if (!film) {
        res.status(404).json({ error: 'Film not found' });
      } else {
        res.json(film);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to update film' });
    });
};

// Supprime un film par son ID
exports.deleteFilm = (req, res) => {
  const filmId = req.params.id;
  Film.findByIdAndDelete(filmId)
    .then(film => {
      if (!film) {
        res.status(404).json({ error: 'Film not found' });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Failed to delete film' });
    });
};
