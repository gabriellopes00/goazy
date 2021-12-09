export interface FindCategoryRepository {
  findByName(name: string): Promise<any>
}
