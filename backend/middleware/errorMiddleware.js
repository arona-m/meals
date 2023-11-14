const notFound = (req, res, next) => {
  // Creating an Error object with a descriptive message containing the original requested URL
  const error = new Error(`Not Found - ${req.originalUrl}`);

  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  // Extracting the error message from the error object
  let message = err.message;

  // check per errors ne db 
  if (err.name === 'CastError' && err.kind === 'ObjectId') {
    statusCode = 404;
    message = 'Resource not found';
  }

  res.status(statusCode).json({
    message: message,
    // Including the stack trace only if the environment is not production
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export { notFound, errorHandler };
