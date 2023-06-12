const mongoose = require('mongoose')

mongoose
    .connect('mongodb://127.0.0.1:27017/npdb')
    .then(() => console.log('connected to localhost'))
    .catch(error => handleError(error))
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db