import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAccountRentals } from '../usecases/list-account-rentals'

export class ListAccountRentalsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listAccountRentals = container.resolve(ListAccountRentals)

    const { id } = req.account
    const { account_id: accountId } = req.params

    if (id !== accountId) return res.status(403).json({ error: 'Access denied' })

    const rentals = await listAccountRentals.execute({ accountId })
    return res.status(200).json({ rentals })
  }
}
