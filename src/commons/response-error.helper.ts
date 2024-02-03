export class ExceptionError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const ErrorHandler = (err, req, res, next) => {
  console.log(err)
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong';

  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
  })
}