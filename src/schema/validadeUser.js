// const Joi = require('joi');

// const validateUser = (req, res, next) => {
//   const { error } = Joi.object({
//     displayName: Joi.string().min(8).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//     image: Joi.string().min(6).required(),
//   }).validate(req.body);
//   if (!error) return next();
// };

// module.exports = validateUser;
