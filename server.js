
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

const plantRouter = require('./api/plant/plant-router')
const authRouter = require('./api/users/auth-router')
const userRouter = require('./api/users/user-router')

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
server.use('/api/plants', plantRouter)
server.use('/auth', authRouter)
server.use('/users', userRouter)

server.get("/", (req, res) => {
    res.json({ api: "water my plants is up and running!" })
  })
  



module.exports = server;