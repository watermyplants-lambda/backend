const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const secrets =require('./secrets')
const { isValid } = require("./user-service.js")
const Users = require("./user-model")

const router = require('express').Router()

// endpoints
router.post('/register', async (req, res, next) => {
  // console.log(`inside singup router`)
  try {
    //validate all require fields
    if (
      !req.body.first_name &&
      !req.body.last_name &&
      !req.body.email &&
      !req.body.password
    ) {
      res.status(404).json({ error: `first_name, last_name, email, and password are require` })
    }

    // validate unique email
    const email = {
      email: req.body.email
    }
    const [user] = await Users.findBy(email)
    if (user) {
      res.status(404).json({ error: `Email not unique` })
    }

    // implement registration
    const credentials = req.body

    if (isValid(credentials)) {
      const rounds = process.env.BCRYPT_ROUNDS || 8
      // hash the password
      const hash = bcryptjs.hashSync(credentials.password, rounds)
      credentials.password = hash

      // save the user to the database
      await Users.add(credentials)
      res.status(201).json({ message: `User sucessfully made.` })

    } else { //password is not a string or their is no email
      res.status(404).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      })
    }
  } catch (error) {
    console.log(error.message)
    next(error)
  }

})

router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    if (isValid(req.body)) {
      Users.findBy({ email })
        .then(([user]) => {
          if (user && bcryptjs.compareSync(password, user.password)) {
            const token = makeToken(user) // make token
            res.status(200).json({ message: "Welcome to our API", token }); // send it back
          } else {
            res.status(401).json({ message: "Invalid credentials" });
          }
        })
        .catch(error => {
          res.status(500).json({ message: error.message });
        });
    } else {
      res.status(400).json({
        message: "please provide username and password and the password shoud be alphanumeric",
      });
    }
  });
  

  function makeToken(user) {
    const payload = {
      subject: user.id,
      username: user.email,
     
    };
    const options = {
      expiresIn: '1d',
    };
    return jwt.sign(payload, secrets.jwtSecret, options);
  }
  module.exports = router