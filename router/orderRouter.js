import Router from 'express'
import orderController from '../controller/orderController.js'

const router = new Router()

router.post('/user-orders/:id',orderController.create)
router.delete('/user-orders/:id',orderController.delete)

export default router;