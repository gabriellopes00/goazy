import 'module-alias/register'
import express from 'express'
import { accountsRoutes } from './routes/accounts.routes'
import { categoriesRoutes } from './routes/categories.route'

const app = express()

app.use('/categories', categoriesRoutes)
app.use('/accounts', accountsRoutes)

app.listen(3333, () => console.log('running...'))
