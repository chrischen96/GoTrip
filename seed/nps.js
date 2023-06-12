const db = require('../db')
const { NPs } = require('../models')

db.on('error', err => logError(err))

const seedNPs = async() => {
    const NPs = []
    await NPs.insertMany(NPs)
    console.log('successfully insert NPs')
}

const run = async() => {
    await seedNPs();
    db.close()
}

run()