import '@/shared/container'
import { CreateCarController } from '@/modules/cars/controllers/create-car-controller'
import { Router } from 'express'

const carRoutes = Router()

const createCarController = new CreateCarController()
carRoutes.post('/', createCarController.handle)

export { carRoutes }
