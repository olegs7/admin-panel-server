import Router from 'express'
import productController from '../controller/productController.js'

const router = new Router()

router.get('/products',productController.getAll)
router.get('/products/:id',productController.getOne)
router.post('/products',productController.create)
router.put('/products/:id',productController.update)
router.delete('/products/:id',productController.delete)

export default router;