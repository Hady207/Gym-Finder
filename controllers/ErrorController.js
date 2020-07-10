const AppError = require('../util/AppError');

const sendErrorDev = (err, req, res) => {
  console.log(AppError);
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // B) RENDERED WEBSITE
  console.error('ERROR 💥', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message,
  });
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack);

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    // let error = { ...err };
    // error.message = err.message;
    // if (error.name === 'CastError') error = handleCastErrorDB(error);
    // if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    // if (error.name === 'ValidationError')
    //   error = handleValidationErrorDB(error);
    // if (error.name === 'JsonWebTokenError') error = handleJWTError();
    // if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    // sendErrorProd(error, req, res);
  }
};
