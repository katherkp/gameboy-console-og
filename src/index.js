require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/videogames', require('./videogames-controllers'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)