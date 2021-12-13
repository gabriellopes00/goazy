import { CreateAccountController } from '@/modules/accounts/controllers/create-account-controller'
import '@/shared/container'
import { Router } from 'express'

const accountsRoutes = Router()

const createCategoryController = new CreateAccountController()
accountsRoutes.post('/', createCategoryController.handle)

export { accountsRoutes }
