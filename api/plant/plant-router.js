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

  module.exports = router