import { Router } from 'express'
import { makeCreateCategoryController } from '../factories/controllers/create-category-controller'
import multer from 'multer'
import { ImportCategory } from '@/modules/cars/usecases/import-category'

const uploader = multer({
  dest: './tmp'
})

const categoriesRoutes = Router()

categoriesRoutes.post('/', makeCreateCategoryController().handle)
categoriesRoutes.post('/import/:source', uploader.single('file'), async (req, res) => {
  const { file } = req
  await new ImportCategory(null).execute(file)
  res.sendStatus(200)
})
categoriesRoutes.get('/:id')
categoriesRoutes.patch('/:id')
categoriesRoutes.delete('/:id')

export { categoriesRoutes }
