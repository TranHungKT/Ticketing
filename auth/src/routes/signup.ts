import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const router = Router()

router.post(
  '/api/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('password unvalid')
  ],
  (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).send(errors.array())
    }

    const { email, password } = req.body
    res.send('OK')
  }
)

export { router as signupRouter }
