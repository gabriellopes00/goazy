import '@/shared/container'
import { AuthAccountController } from '@/modules/accounts/controllers/auth-account-controller'
import { CreateAccountController } from '@/modules/accounts/controllers/create-account-controller'
import { Router } from 'express'

const accountsRoutes = Router()

const createCategoryController = new CreateAccountController()
accountsRoutes.post('/', createCategoryController.handle)

const authAccountController = new AuthAccountController()
accountsRoutes.post('/auth', authAccountController.handle)

export { accountsRoutes }
