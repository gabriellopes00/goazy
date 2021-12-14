import { PgAccountRepository } from '@/infra/database/repositories/account-repository'
import { NextFunction, Request, Response } from 'express'

export async function verifyAdminAccount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const { id } = req.account
  const account = await new PgAccountRepository().findById(id)
  if (!account.isAdmin) {
    return res.status(403).json({ error: 'Access restricted for admin accounts' })
  }

  next()
}
