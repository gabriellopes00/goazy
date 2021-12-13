import '@/shared/container'
import { AuthAccountController } from '@/modules/accounts/controllers/auth-account-controller'
import { CreateAccountController } from '@/modules/accounts/controllers/create-account-controller'
import { Router } from 'express'
import { UpdateAccountAvatarController } from '@/modules/accounts/controllers/update-account-avatar'
import multer from 'multer'
import { upload } from '@/infra/upload/multer'
import { signInAccount } from '../middlewares/sign-in-account'

const accountsRoutes = Router()

const createCategoryController = new CreateAccountController()
accountsRoutes.post('/', createCategoryController.handle)

const authAccountController = new AuthAccountController()
accountsRoutes.post('/auth', authAccountController.handle)

const uploader = multer(upload('temp/avatar'))
const updateAccountAvatar = new UpdateAccountAvatarController()
accountsRoutes.patch(
  '/avatar',
  signInAccount,
  uploader.single('avatar'),
  updateAccountAvatar.handle
)

export { accountsRoutes }
