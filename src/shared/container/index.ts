import { PgAccountRepository } from '@/infra/database/repositories/account-repository'
import { PgCategoryRepository } from '@/infra/database/repositories/category-repository'
import { PgSpecificationRepository } from '@/infra/database/repositories/specification-repository'
import { SaveAccountRepository } from '@/modules/accounts/repositories/save-account-repository'
import {
  FindCategoryRepository,
  SaveCategoryRepository
} from '@/modules/cars/repositories/category-repository'
import {
  FindSpecificationRepository,
  SaveSpecificationRepository
} from '@/modules/cars/repositories/specification-repository'
import { container } from 'tsyringe'

container.registerSingleton<SaveCategoryRepository & FindCategoryRepository>(
  'PgCategoryRepository',
  PgCategoryRepository
)

container.registerSingleton<SaveSpecificationRepository & FindSpecificationRepository>(
  'PgSpecificationRepository',
  PgSpecificationRepository
)

container.registerSingleton<SaveAccountRepository>('PgAccountRepository', PgAccountRepository)
