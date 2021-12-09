import { Router } from 'express'
import { makeCreateCategoryController } from '../factories/controllers/create-category-controller'

const categoriesRoutes = Router()

categoriesRoutes.post('/', makeCreateCategoryController().handle)
categoriesRoutes.get('/')
categoriesRoutes.get('/:id')
categoriesRoutes.patch('/:id')
categoriesRoutes.delete('/:id')

export { categoriesRoutes }
