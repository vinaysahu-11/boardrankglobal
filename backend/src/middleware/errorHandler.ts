import { NextFunction, Request, Response } from 'express'

export function notFoundHandler(request: Request, response: Response): void {
  response.status(404).json({
    error: 'Not Found',
    path: request.originalUrl,
  })
}

export function errorHandler(
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction,
): void {
  response.status(500).json({
    error: error.message || 'Internal Server Error',
  })
}
