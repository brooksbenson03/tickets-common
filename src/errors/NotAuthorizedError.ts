import { CustomError } from './CustomError'

export class NotAuthorizedError extends CustomError {
  statusCode = 401

  constructor() {
    super('User not authorized')

    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not authorized to access resource' }]
  }
}
