const path = require('path')
const express = require('express')

const server = express()
const cakes = require('./routes/shop')

server.use(express.static(path.join(__dirname, '../public')))

server.use('/gallery',cakes)

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/index.html'))
  })

module.exports = server
