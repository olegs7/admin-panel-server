import Router from 'express'
import userController from '../controller/userController.js'

const router = new Router()

router.post('/login',userController.login)
router.get('/',userController.getAll)
router.get('/users',userController.getAll)
router.get('/users/:id',userController.getOne)
router.post('/users',userController.create)
router.patch('/users/:id',userController.update)
router.delete('/users/:id',userController.delete)

export default router;