const mongoose = require('mongoose');

const specieSchema = new mongoose.Schema({
  fields: {
            edited:{
              type: String,
              require:true
            },
            classification:{
                type: String,
                require:true
            },
            name: {
                type: String,
                require:true
            },
            designation: {
                type: String,
                require:true
            },
            created: {
                type: String,
                require:true
            },
            eye_colors:{
              type: String,
              require:true
            },
            people: {
                type: [Number],
                require:true
            },
            skin_colors: {
                type: String,
                require:true
            },
            language: {
                type: String,
                require:true
            },
            hair_colors:{
                type: String,
                require:true
            },
            homeworld:{
                type: Number,
                require:true,
            },
            average_lifespan:{
                type: String,
                require:true,
            },
            average_height:{
                type: String,
                require:true,
            },
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

const Specie = mongoose.model('Specie', specieSchema);

module.exports = Specie;