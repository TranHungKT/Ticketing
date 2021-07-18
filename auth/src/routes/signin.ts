import { Router, Request, Response } from 'express'

const router = Router()

router.post('/api/users/signin', (req: Request, res: Response) => {
  res.send('OK')
})

export { router as signinRouter }
