import { Router } from 'express'

const categoriesRoutes = Router()

categoriesRoutes.post('/')
categoriesRoutes.get('/')
categoriesRoutes.get('/:id')
categoriesRoutes.patch('/:id')
categoriesRoutes.delete('/:id')

export { categoriesRoutes }
