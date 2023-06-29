const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
  fields: {
            starships: {
                type: [Number],
                required: true,
            },
            edited:{
              type: String,
              require:true
            },
            vehicles:{
                type: [Number],
                require:true
            },
            planets: {
                type: [Number],
                require:true
            },
            producer: {
                type: String,
                require:true
            },
            title: {
                type: String,
                require:true
            },
            created:{
              type: String,
              require:true
            },
            episode_id: {
                type: Number,
                require:true
            },
            director: {
                type: String,
                require:true
            },
            release_date: {
                type: String,
                require:true
            },
            opening_crawl: {
                type: String,
                require:true
            },
            characters:{
                type: [Number],
                require:true
            },
            species:{
                type: [Number],
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

const Film = mongoose.model('Film', filmSchema);

module.exports = Film;
