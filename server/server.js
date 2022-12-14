const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config
const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
mongoose.connect(process.env.MONGO_URI, { useNewURLParser: true, useUnifiedTopologly: true }, () => {
  console.log('connected to mongo on:', process.env.MONGO_URI)
})

app.get('/', (req, res) => {
  res.json({message: 'Player ready?'})
})

const videogamesController = require('./videogames-controllers')
app.use('/videogame, videogameController')

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})