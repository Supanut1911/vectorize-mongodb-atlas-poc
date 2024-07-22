import { Router } from 'express'
import { createProduct } from '../modules/products/controller'

const router = Router()

router.post('/product', createProduct)

export default router