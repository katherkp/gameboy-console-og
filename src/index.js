require('dotenv').config()
const mongoose = require('mongoose')
var videogame = mongoose.connection
const connection = 'mongodb+srv://cluster20248.ozueumb.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority'

mongoose
    .connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Database connected successfully!'))
    .catch((err) => console.log(err));

module.exports.Videogame = require('./models/videogame')
module.exports.Review = require('./models/review')