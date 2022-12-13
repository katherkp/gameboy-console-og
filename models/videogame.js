const mongoose = require('mongoose')
const { Schema } = mongoose

const videogameSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    gameTitle: { type: String, required: true },
    description: { type: String, default: 'Nothing Yet!'},
    imageURL: { type: String, default: 'http://placekitten.com/200/300' },
    releaseDate: { type: String, default: 'N/A' }, reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
})

const Videogame = mongoose.model('Videogame', videogameSchema)
module.exports = mongoose.model('Videogame', videogameSchema)