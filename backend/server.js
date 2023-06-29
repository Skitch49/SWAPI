const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;
const cors = require('cors');
// connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la Request
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use("/film", require("./routes/film.routes"));
app.use("/people", require("./routes/people.routes"));
app.use("/planet", require("./routes/planet.routes"));
app.use("/specie", require("./routes/specie.routes"));
app.use("/starship", require("./routes/starship.routes"));
app.use("/transport", require("./routes/transport.routes"));
app.use("/vehicule", require("./routes/vehicule.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port  " + port));