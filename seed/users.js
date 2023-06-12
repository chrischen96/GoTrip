const db = require('../db')
const { Users } = require('../models')

db.on('error', err => logError(err))

const seedUsers = async() => {
    const Users = []
    await Users.insertMany(Users)
    console.log('successfully insert Users')
}

const run = async() => {
    await seedUsers();
    db.close()
}

run()