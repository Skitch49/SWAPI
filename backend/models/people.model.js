const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  fields: {
            edited:{
              type: String,
              require:true
            },
            name:{
                type: String,
                require:true
            },
            created: {
                type: String,
                require:true
            },
            gender: {
                type: String,
                require:true
            },
            skin_color: {
                type: String,
                require:true
            },
            hair_color:{
              type: String,
              require:true
            },
            height: {
                type: String,
                require:true
            },
            eye_color: {
                type: String,
                require:true
            },
            mass: {
                type: String,
                require:true
            },
            homeworld:{
                type: Number,
                require:true
            },
            birth_year:{
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

const People = mongoose.model('People', peopleSchema);

module.exports = People;