import { Router, Request, Response } from 'express'

const router = Router()

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.send('HI HUNG')
})

export { router as currentUserRouter }
