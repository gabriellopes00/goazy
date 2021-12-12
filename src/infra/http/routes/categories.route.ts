import { CreateCategoryController } from '@/modules/cars/controllers/create-category-controller'
import { ImportCategoryController } from '@/modules/cars/controllers/import-category-controller'
import '@/shared/container'
import { Router } from 'express'
import multer from 'multer'

const uploader = multer({ dest: './tmp' })

const categoriesRoutes = Router()

const createCategoryController = new CreateCategoryController()
categoriesRoutes.post('/', createCategoryController.handle)

const importCategoryController = new ImportCategoryController()
categoriesRoutes.post('/import/:source', uploader.single('file'), importCategoryController.handle)

export { categoriesRoutes }
