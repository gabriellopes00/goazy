import { Specification } from '../entities/specification/specification'

export interface SaveSpecificationRepository {
  save(data: Specification): Promise<void>
}

export interface FindSpecificationRepository {
  findByName(name: string): Promise<Specification>
  findByIds(ids: string[]): Promise<Specification[]>
}
