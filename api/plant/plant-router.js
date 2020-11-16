const express = require('express')
const router = express.Router()
const Plants = require('./plant-model')
const restricted = require('../users/auth-middleware')



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


  //update plant 
  router.put('/:id', (req, res) => {
    const id = req.params.id
    const change = req.body
    const update = { ...change, id }
  
    Plants.update(id, change) 
      .then(plant => {
        console.log(plant)
        res.status(200).json(update)
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'could not update plant' })
      })
  })


  //delete plant
  router.delete('/:id', (req, res) => {
    const id = req.params.id
    Plants.remove(id)
      .then(plant => {
        console.log(plant);
        res.status(200).json({ success: `plant has been destroyed` })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'could not delete a plant' })
      })
  })

  module.exports = router