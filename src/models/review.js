const mongoose = require('mongoose')

let reviewSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous'},
    comment: { type: Boolean, default: false },
    stars: { type: Number, required: true }
})

module.exports = mongoose.model('Review', reviewSchema)