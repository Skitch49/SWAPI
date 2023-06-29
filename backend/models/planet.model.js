const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  fields: {
            edited:{
              type: String,
              require:true
            },
            climate:{
                type: String,
                require:true
            },
            surface_water: {
                type: String,
                require:true
            },
            name: {
                type: String,
                require:true
            },
            diameter: {
                type: String,
                require:true
            },
            rotation_period:{
              type: String,
              require:true
            },
            created: {
                type: String,
                require:true
            },
            terrain: {
                type: String,
                require:true
            },
            gravity: {
                type: String,
                require:true
            },
            orbital_period:{
                type: String,
                require:true
            },
            population:{
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

const Planet = mongoose.model('Planet', planetSchema);

module.exports = Planet;