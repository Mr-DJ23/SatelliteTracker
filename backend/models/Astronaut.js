const mongoose = require('mongoose');

const AstronautSchema = new mongoose.Schema({
  astronautName: String,
  longitude: Number,
  latitude: Number,
  altitude: String
});

const Astronaut = mongoose.model('Astronaut', AstronautSchema);

module.exports = Astronaut;
