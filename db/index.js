const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

// mongoose
//     .connect('mongodb://127.0.0.1:27017/npdb')
//     .then(() => console.log('connected to mongodb'))
//     .catch(error => handleError(error))
console.log(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@calski.lyliq7c.mongodb.net/npdb`)
mongoose
    .connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@calski.lyliq7c.mongodb.net/npdb`)
    .then(() => console.log('connected to mongodb'))
    .catch(error => console.log(error.message))

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db