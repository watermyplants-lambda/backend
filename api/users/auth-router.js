const router = require('express').Router()
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./secrets.js')
const { isValid } = require('./user-service')
const Users = require('./user-model')





//get users 
router.get('/users', async (req,res,next) => {
    try {
        const user = await Users.find()
        res.json(user)
    } catch (err) {
        next(err)
    }
})



router.post("/register", (req, res) => {
    const credentials = req.body
  
    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8;
  
      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds)
  
      credentials.password = hash
  
      // save the user to the database
      Users.add(credentials)
        .then(user => {
          res.status(201).json({ data: user });
        })
        .catch(error => {
          res.status(500).json({ message: error.message })
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      })
    }
  })

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    if (isValid(req.body)) {
      Users.findBy({ email: email })
        .then(([user]) => {
          if (user && bcryptjs.compareSync(password, user.password)) {
            const token = generateToken(user) // make token
            res.status(200).json({ message: "Welcome to our API", token })// send it back
          } else {
            res.status(401).json({ message: "Invalid credentials" })
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide email and password and the password shoud be alphanumeric",
      })
    }
  })

function generateToken(user) {
  const payload = {
    userId: user.id,
    email: user.email
  }

  const options = {
    expiresIn: '3h'
  }

  return jwt.sign(payload, jwtSecret, options)
}

module.exports = router