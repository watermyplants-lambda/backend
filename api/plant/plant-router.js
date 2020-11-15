const express = require('express')
const router = express.Router()
const Plants = require('./plant-model')


//get plants
router.get('/', (req, res) => {
    Plants.find()
      .then(plants => {
        res.status(200).json(plants);
      })
      .catch(err => {
        res.status(500).json({ error: 'can not find plants' })
      })
  })

  //get plants by id
  router.get('/:id', (req, res) => {
    const id = req.params.id
     Plants.findPlantById(id)
      .then(plants => {
        res.status(200).json(plants)
      })
      .catch(err => {
        res.status(500).json({ error: 'no plant exists for this id' })
      })
  })

  module.exports = router