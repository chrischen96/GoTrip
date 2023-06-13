const db = require('../db')
const { Plans } = require('../models')

db.on('error', err => logError(err))

const seedPlans = async() => {
    const plans = [
        {
            title: 'Trip to Yosemite',
            destination: 'Yosemite',
            username: 'xin',
            startDate: '2023-06-30',
            duration: '5',
            budget: 1500,
            note: 'Use sunscream.'
        },
        {
            title: 'Summer vacation',
            destination: 'Yellowstone',
            username: 'xin',
            startdate: '2023-08-10',
            duration: 7,
            budget: 3500,
            note: 'Be prepare to see bears.',
        }
    ]
    await Plans.insertMany(plans)
    console.log('successfully insert Plans')
}

const run = async() => {
    await seedPlans();
    db.close()
}

run()