const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.Videogame.find()
        .then((videogame) => {
            res.render('videogame/index', { videogame })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// post

router.get('/new', (req, res) => {
    res.render('videogames/new')
})

router.put('/:id', (req, res) => {
    db.Videogame.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/videogames/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

router.delete('/:id', (req, res) => {
    db.Videogame.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect('/videogames')
        })
})

router.get('/:id/edit', (req, res) => {
    db.Videogame.findById(req.params.id)
        .then(videogame => {
            res.render('vidgeogames/edit', { videogame })
        })
        .catch(err => {
            res.render('error404')
        })
})

router.post('/:id/review', (req, res) => {
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

router.delete('/:id/revide/:reviewId', (req, res) => {
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

module.exports = router
