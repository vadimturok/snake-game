const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user', userController.createUser)
router.put('/user', userController.updateRecord)
router.get('/user/top', userController.getRecordUsers)
router.get('/user/:name', userController.getByName)
module.exports = router