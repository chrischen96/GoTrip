const router = require('express').Router()
const npRouter = require('./npRouter')
const planRouter = require('./planRouter')
const userRouter = require('./userRouter')

router.use('/nps', npRouter)
router.use('/plans', planRouter)
router.use('/users', userRouter)

module.exports = router