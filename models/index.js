const mongoose = require('mongoose')
const npSchema = require('./np')
const planSchema = require('./plan')
const userSchema = require('./user')

const NPs = mongoose.model('NP', npSchema)
const Plans = mongoose.model('Plan', planSchema)
const Users = mongoose.model('User', userSchema)

module.exports = {
    NPs,
    Plans,
    Users
}