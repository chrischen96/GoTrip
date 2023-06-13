const db = require('../db')
const { Users } = require('../models')

db.on('error', err => logError(err))

const seedUsers = async() => {
    const users = [
        {
            name: 'Xin',
            location: 'LA, CA',
            email: 'cxsept@gmail.com',
            phone: 3132621111,
            username: 'xin',
            password: 'Xc123456'
        }
    ]
    await Users.insertMany(users)
    console.log('successfully insert Users')
}

const run = async() => {
    await seedUsers();
    db.close()
}

run()