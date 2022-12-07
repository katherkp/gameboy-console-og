const mongoose = require('mongoose')

const videogameSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    gameTitle: { type: String, required: true },
    pic: { type: String, default: ' ' },
    rating: { type: Number, default: 'Not Yet Rated' },
    releaseDate: { type: String, default: 'N/A' },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
})

module.exports = mongoose.model('Videogame', videogameSchema)