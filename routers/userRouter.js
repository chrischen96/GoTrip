const router = require('express').Router()
const userController = require('../controllers/userController')


// CRUD
router.post('/', userController.create)

router.get('/', userController.getAll)
router.get('/:id', userController.getById)

router.put('/:id', userController.update)

router.delete('/:id', userController.deleteUser)

router.get('/user/login', (req,res) => {
    console.log('user/user/login')
    res.send('if it is working')
    session=req.session;
    console.log(session)
    if(session.userid){
        res.send('../gotrip/index.html');
    } else
        res.send('../gotrip/user.html')
})


module.exports = router