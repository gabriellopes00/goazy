import 'reflect-metadata'
import { CreateCategory, CreateCategoryDTO } from '@/modules/cars/usecases/create-category'
import { InMemoryCategoryRepository } from '@t/__mocks__/repositories/in-memory-category-repository'

describe('Create Category', () => {
  const repository = new InMemoryCategoryRepository()
  const sut = new CreateCategory(repository)

  const dto: CreateCategoryDTO = {
    name: 'first category',
    description: 'lorem ipsum dolor sit'
  }

  it('Should return a new category on success', async () => {
    const category = await sut.execute(dto)
    expect(category).toEqual(expect.objectContaining(dto))
  })

  it('Should not create a duplicated category', async () => {
    await repository.save({ ...dto, id: '', createdAt: new Date(), updatedAt: new Date() })
    expect(async () => await sut.execute(dto)).rejects.toThrow()
  })
})
