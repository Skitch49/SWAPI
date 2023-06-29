const mongoose = require('mongoose');

const vehiculeSchema = new mongoose.Schema({
  fields: {
            vehicle_class:{
              type: String,
              require:true
            },
            pilots:{
                type: [Number],
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

const Vehicule = mongoose.model('Vehicule', vehiculeSchema);

module.exports = Vehicule;