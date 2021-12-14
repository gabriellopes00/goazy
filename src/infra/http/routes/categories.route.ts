import { CreateCategoryController } from '@/modules/cars/controllers/create-category-controller'
import { ImportCategoryController } from '@/modules/cars/controllers/import-category-controller'
import '@/shared/container'
import { Router } from 'express'
import multer from 'multer'
import { signInAccount } from '../middlewares/sign-in-account'
import { verifyAdminAccount } from '../middlewares/verify-admin-account'

const uploader = multer({ dest: './tmp' })

const categoriesRoutes = Router()
categoriesRoutes.use(signInAccount, verifyAdminAccount)

const createCategoryController = new CreateCategoryController()
categoriesRoutes.post('/', createCategoryController.handle)

const importCategoryController = new ImportCategoryController()
categoriesRoutes.post('/import', uploader.single('file'), importCategoryController.handle)

export { categoriesRoutes }
