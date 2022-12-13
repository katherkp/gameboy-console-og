const express = require('express')
const videogames = express.Router()
const Videogame = require('../models/videogame')
const mongoose = require('mongoose')

// get to view a specific game
videogames.get('/', (req, res) => {
    db.Videogame.find()
        .then((videogame) => {
            res.render('videogame/index', { videogame })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

//post to add a new video game
videogames.post('/', (req, res) => {
    if (req.body.pic === '') { req.body.pic = undefined}
    if (req.body.gameTitle === '') { req.body.gameTitle = undefined }
    db.Videogame.create(req.body)
        .then(() => {
            res.redirect('/videogames')
        })
        .catch(err => {
            if (err && err.name == 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}. ${err.errors[field].message}`
                }
                res.render('videogames/new', { message })
            }
            else {
                res.render('error404')
            }
        })
})

videogames.get('/new', (req, res) => {
    res.render('videogames/new')
})

videogames.put('/:id', (req, res) => {
    db.Videogame.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/videogames/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

videogames.delete('/:id', (req, res) => {
    db.Videogame.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/videogames')
        })
})

videogames.get('/:id/edit', (req, res) => {
    db.Videogame.findById(req.params.id)
        .then(videogame => {
            res.render('vidgeogames/edit', { videogame })
        })
        .catch(err => {
            res.render('error404')
        })
})

videogames.post('/:id/review', (req, res) => {
    console.log('post review', req.body)
    if (req.body.author === '') { req.body.author = undefined }
    db.Videogame.findById(req.params.id)
        .then(place => {
            db.Review.create(req.body)
                .then(review => {
                    videogame.reviews.push(review.id)
                    videogame.save()
                        .then(() => {
                            res.redirect(`/videogames/${req.params.id}`)
                        })
                        .catch(err => {
                            res.render('error404')
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})

videogames.delete('/:id/review/:reviewId', (req, res) => {
    db.Review.findByIdAndDelete(req.params.reviewId)
        .then(() => {
            console.log('Success')
            res.redirect(`/videogames${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

module.exports = videogames
