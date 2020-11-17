const Plants = require('./plant-model')


 function plantExist(req, res, next) {
 
    const { id } = req.params
  
    const plant = Plants.myPlantId(id)
  
    if(!plant){
      res.status(404).json({ message: 'no such plant exists'})
    } else if (!plant.name || !plant.species || !plant.water_schedule){
      res.status(404).json({ message: 'Input missing data fields'})
    }
      next();
    }


  
    
    module.exports = plantExist