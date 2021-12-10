import 'module-alias/register'
import express from 'express'
import { categoriesRoutes } from './routes/categories.route'

const app = express()

app.use('/', categoriesRoutes)

app.listen(3333, () => console.log('running...'))
