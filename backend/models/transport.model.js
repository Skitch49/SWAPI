const mongoose = require('mongoose');

const transportSchema = new mongoose.Schema({
  fields: {
            edited:{
              type: String,
              require:true
            },
            consumables:{
                type: String,
                require:true
            },
            name: {
                type: String,
                require:true
            },
            created: {
                type: String,
                require:true
            },
            cargo_capacity: {
                type: String,
                require:true
            },
            passengers: {
                type: String,
                require:true
            },
            max_atmosphering_speed: {
                type: String,
                require:true
            },
            crew: {
                type: String,
                require:true
            },
            length: {
                type: String,
                require:true
            },
            model: {
                type: String,
                require:true
            },
            cost_in_credits: {
                type: String,
                require:true
            },
            manufacturer: {
                type: String,
                require:true
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

const Transport = mongoose.model('Transport',transportSchema);

module.exports = Transport;