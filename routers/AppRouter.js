const router = require('express').Router()
const npRouter = require('./npRouter')
const planRouter = require('./planRouter')
const userRouter = require('./userRouter')

router.get('/', (req, res) => res.status(200).send('This is api page'))
router.use('/nps', npRouter)
router.use('/plans', planRouter)
router.use('/user', userRouter)

module.exports = router