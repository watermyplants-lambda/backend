const router = require('express').Router()
const jwt = require('jsonwebtoken')
const Users = require('./user-model')
const Plants = require('../plant/plant-model')
const restricted = require('./auth-middleware');
const validateUser = require('./user-middleware');
const { plantExist } = require('../plant/plant-middleware')


// GET a list of all users
router.get("/", restricted, (req, res, next) => {

    console.log('users get /')
    console.log(req.jwt)
    // console.log(req.jwt.department)
  
    Users.find()
      .then(users => {
  
        // console.log(`inside findBy`)
        // console.log(users)
  
        if (users.length) {
          res.status(200).json(users)
        } else {
          res.status(404).json({ message: 'no users at the moment' })
        }
      })
      .catch(next)
  })


router.get('/:id', restricted, validateUser, (req, res) => {
    res.status(200).json(req.user)
})

router.put('/:id', restricted, validateUser, (req, res, next) => {
    Users.updateUser(req.params.id, req.body)
    .then(updatedUser => {
      delete updatedUser.password
      res.status(200).json({ updatedUser })
    })
    .catch(next)
})

router.delete('/:id', restricted, validateUser, (req, res) => {
  const id = req.params.id;

  Users.remove(id)
    .then(deleted => {
      console.log(deleted);
      res.status(200).json({ success: `user was deleted` });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: 'user could not be deleted' });
    })
})

router.get('/:id/plants', restricted, validateUser, (req, res) => {
  console.log(req.params.id);
  Plants.findPlantsByUser(req.params.id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Could not get the list of plants for user' })
    })
})

router.post('/:id/plants', restricted, validateUser, plantExist, (req, res) => {
  const id = req.params.id;
  let plants = req.body;
  plants = { ...plants, user_id: id };

  Plants.add(plants)
    .then(newPlant => {
      res.status(201).json(newPlant);
    })
    .catch(error => {
      res.status(500).json({ error: 'Could not save the plant' });
    })
})

function validateUpdateData(req, res, next) {
    if (!req.body.first_name && !req.body.last_name && !req.body.email && !req.body.password) {
      res.status(404).json({ error: `first_name, last_name, email, and password are require` })
    }
    next()
  }

module.exports = router;