import { Router } from 'express'

const specification = Router()

specification.post('/')
specification.get('/')
specification.get('/:id')
specification.patch('/:id')
specification.delete('/:id')

export { specification }
