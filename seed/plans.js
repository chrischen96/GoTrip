const db = require('../db')
const { Plans } = require('../models')

db.on('error', err => logError(err))

const seedPlans = async() => {
    const Plans = []
    await Plans.insertMany(Plans)
    console.log('successfully insert Plans')
}

const run = async() => {
    await seedPlans();
    db.close()
}

run()