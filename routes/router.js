const express = require('express');
const router = express.Router();
//Controllers imports
const touristAttractionController = require('../controllers/touristAttractionController');

router.get('/touristAttractions/', touristAttractionController.getAllAttractions);
router.post('/touristAttractions', touristAttractionController.postAttraction );
router.delete('/touristAttractions/:id', touristAttractionController.deleteAttraction )
router.put('/touristAttractions/:id', touristAttractionController.updateAttraction )
router.get('/touristAttractions/:id', touristAttractionController.getAttraction)
module.exports = router;


