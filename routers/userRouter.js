const router = require('express').Router()
const userController = require('../controllers/userController')

// CRUD
router.post('/', userController.create)

router.get('/', userController.getAll)
router.get('/:id', userController.getById)

router.put('/:id', userController.update)

router.delete('/:id', userController.deleteUser)

module.exports = router