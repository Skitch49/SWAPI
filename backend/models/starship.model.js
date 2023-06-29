const mongoose = require('mongoose');

const starshipSchema = new mongoose.Schema({
  fields: {
            pilots:{
              type: [Number],
              require:true
            },
            MGLT:{
                type: String,
                require:true
            },
            starship_class: {
                type: String,
                require:true
            },
            hyperdrive_rating: {
                type: String,
                require:true
            }
        },
        model:{
            type: String,
            require:true,
        },
        pk:{
            type: Number,
            require:true,
        },
});

const Starship = mongoose.model('Starship', starshipSchema);

module.exports = Starship;