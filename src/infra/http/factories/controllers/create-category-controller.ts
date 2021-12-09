import { CreateCategoryController } from '@/modules/cars/controllers/create-category-controller'
import { CreateCategory } from '@/modules/cars/usecases/create-category'

export function makeCreateCategoryController() {
  const usecase = new CreateCategory(null)
  return new CreateCategoryController(usecase)
}
