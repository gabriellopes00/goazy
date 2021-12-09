import { Specification } from '../entities/specification/specification'
import {
  FindSpecificationRepository,
  SaveSpecificationRepository
} from '../repositories/specification-repository'

export interface CreateSpecificationDTO {
  name: string
  description: string
}

export class CreateSpecification {
  constructor(
    private readonly repository: SaveSpecificationRepository & FindSpecificationRepository
  ) {}

  public async execute(params: CreateSpecificationDTO): Promise<Specification> {
    const alreadyExits = await this.repository.findByName(params.name)
    if (alreadyExits) throw new Error('asdf')

    const uuid = 'uuid'
    const specification: Specification = {
      ...params,
      id: uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    await this.repository.save(specification)
    return specification
  }
}
