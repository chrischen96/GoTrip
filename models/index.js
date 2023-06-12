const mongoose = require('mongoose')
const npSchema = require('./np')
const planSchema = require('./plan')
const userSchema = require('./user')

const NPs = db.model('NP', npSchema)
const Plans = db.model('Plan', planSchema)
const Users = db.model('User', userSchema)

module.exports = {
    NPs,
    Plans,
    Users
}