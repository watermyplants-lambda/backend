const express = require('express')
const router = express.Router()
const Plants = require('./plant-model')
const restricted = require('../users/auth-middleware')
const validateUser = require('../users/user-middleware')
const db = require("../../data/config")




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

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    db("plants")
      .where({ id })
      .then(plant => {
        if (plant.length === 0) {
          res
            .status(400)
            .json({ message: "There are no plants associated with that id." });
        } else {
          res.status(200).json(plant);
        }
      })
      .catch(err => res.status(500).json(err));
  });
  
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