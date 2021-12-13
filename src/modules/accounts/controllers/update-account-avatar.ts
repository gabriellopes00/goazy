import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateAccountAvatar } from '../usecases/update-account-avatar'

export class UpdateAccountAvatarController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.account
      const avatarUrl = req.file.filename
      const updateAccountAvatar = container.resolve(UpdateAccountAvatar)
      await updateAccountAvatar.execute({ accountId: id, avatarUrl })
      return res.status(204)
    } catch (error) {
      console.error(error)
      return res.sendStatus(500)
    }
  }
}
