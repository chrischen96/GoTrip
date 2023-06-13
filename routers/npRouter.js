const router = require('express').Router()
const npController = require('../controllers/npController')

// CRUD
router.post('/', npController.create)

router.get('/', npController.getAll)
router.get('/id/:id', npController.getById)
router.get('/find', npController.find)

router.put('/:id', npController.update)

router.delete('/:id', npController.delete)

module.exports = router