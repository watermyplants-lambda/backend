
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
require('colors')

const server = express()

const plantRouter = require('./api/plant/plant-router')
const authRouter = require('./api/users/auth-router')

server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())
// server.use('/api/plants', plantRouter)
// server.use('/api/users/auth-router.js', authRouter)



module.exports = server;