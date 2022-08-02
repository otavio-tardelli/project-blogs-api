const errors = {
  ValidationError: 400,
  NotFoundError: 404,
  foundUser: 409,
  problemWithToken: 401,
};

const errorHandler = (err, _req, res, _next) => {
  const { name, message } = err;
  const status = errors[name];
  res.status(status).json({ message });
};

module.exports = errorHandler;