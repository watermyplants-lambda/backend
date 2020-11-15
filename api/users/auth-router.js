const router = require('express').Router()
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


module.exports = router