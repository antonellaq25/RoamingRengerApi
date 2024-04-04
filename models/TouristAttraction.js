const mongoose = require('mongoose');

const touristAttractionSchema = new mongoose.Schema({
  
    attractionId: Number,
    name: {
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    location: {
      type: String,
    }, image:{
      type: String,
    },
});

const TouristAttraction = mongoose.model('TouristAttraction', touristAttractionSchema);

module.exports = TouristAttraction;
