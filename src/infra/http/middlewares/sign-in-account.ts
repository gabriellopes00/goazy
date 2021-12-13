import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export async function signInAccount(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> {
  const token = req.headers.authorization
  if (!token) return res.status(401).json({ error: 'Missing auth token' })

  const payload = token.split(' ')[1]

  try {
    const { id } = verify(payload, '3EEa09sdf05a7iB7sIGdf90i') as { id: string }
    req.account = { id }
  } catch (error) {
    return res.status(401).json({ error: 'Invalid auth token' })
  }
}
