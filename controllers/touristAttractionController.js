const TouristAttraction = require('../models/TouristAttraction');

exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await TouristAttraction.find();
    res.json(attractions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.postAttraction = async(req, res) => {
  try {
    const attraction = await TouristAttraction.create(req.body);
    res.status(201).json(attraction);

  }catch (error) {
    res.status(500).json({message: error.message})
  }
}

exports.deleteAttraction = async(req, res) => {
  const {id} = req.params
  try{
    const attraction = await TouristAttraction.findByIdAndDelete(id);
    res.status(201).json(attraction);

  }catch (error) {
    res.status(500).json({message: error.message})
  }
}

exports.updateAttraction = async(req, res) => {
  const {id} = req.params
  try{
    const attraction = await TouristAttraction.findByIdAndUpdate(id);
    res.status(201).json(attraction);
}catch (error) {
  res.status(500).json({message: error.message})
}
}
exports.getAttraction = async (req, res)=>{
  const {id} = req.params
  try{
    const attraction = await TouristAttraction.findById(id);
    res.status(201).json(attraction);
}catch (error) {
  res.status(500).json({message: error.message})
}
}
