import { Router } from 'express'
import {createMerchant} from '../modules/merchant/controller'

const router = Router()

router.post('/merchant', createMerchant)

export default router