import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { RequestValidationError } from '../errors/request-validation-error'
import { DatabaseConnectionError } from '../errors/database-connect-error'
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
      throw new RequestValidationError(errors.array())
    }
    throw new DatabaseConnectionError()
    const { email, password } = req.body
    res.send('OK')
  }
)

export { router as signupRouter }
