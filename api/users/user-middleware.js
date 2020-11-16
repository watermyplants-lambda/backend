
const Users = require('./user-model.js');

async function validateUser(req, res, next) {
  const { id } = req.params

  const user = await Users.myUserId(id)

  if(!user){
    res.status(404).json({ message: 'user does not exist'})
  } else {
    next();
  }
  
}


module.exports = validateUser;