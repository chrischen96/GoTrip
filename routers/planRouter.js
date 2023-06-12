const router = require('express').Router()
const planController = require('../controllers/planController')

// CRUD
router.post('/', planController.create)

router.get('/', planController.getAll)
router.get('/:id', planController.getById)
router.get('/find',planController.find)

router.put('/:id', planController.update)

router.delete('/:id', planController.delete)

module.exports = router