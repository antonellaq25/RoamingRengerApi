const express = require('express');
const router = express.Router();
//Controllers imports
const touristAttractionController = require('./controllers/touristAttractionController');

router.get('/touristAttractions/', touristAttractionController.getAllAttractions);

module.exports = router;
