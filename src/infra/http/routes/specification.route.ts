import { Router } from 'express'
import { makeCreateSpecificationController } from '../factories/controllers/create-specification-controller'

const specification = Router()

specification.post('/', makeCreateSpecificationController().handle)
specification.get('/')
specification.get('/:id')
specification.patch('/:id')
specification.delete('/:id')

export { specification }
