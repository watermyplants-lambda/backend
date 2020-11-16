
const Users = require('./user-model.js');

function validateUser(req, res, next) {
    Users.findById(req.params.id)
    .then((user) => {
      if (user) {
        //get users store and pass it down to the other router so they don't have to make a 2 call
        delete user.password
        req.user = user
        next()
      } else {
        res.status(404).json({ error: `Invalid ID` })
      }
    })
    .catch(next)
  
}


module.exports = validateUser;