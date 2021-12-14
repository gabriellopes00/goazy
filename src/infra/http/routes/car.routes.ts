import '@/shared/container'
import { CreateCarController } from '@/modules/cars/controllers/create-car-controller'
import { Router } from 'express'
import { signInAccount } from '../middlewares/sign-in-account'
import { verifyAdminAccount } from '../middlewares/verify-admin-account'

const carRoutes = Router()

const createCarController = new CreateCarController()
carRoutes.post('/', signInAccount, verifyAdminAccount, createCarController.handle)

export { carRoutes }
