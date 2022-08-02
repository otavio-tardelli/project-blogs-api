const Joi = require('joi');
const { User } = require('../database/models');
const { foundUser } = require('./ultil');

const validateUser = async (user) => {
  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().min(6).required(),
  });
  const result = await schema.validateAsync(user);
  return result;
};

const createUser = async (data) => {
  const model = await User.create(data);
  const { email } = model;
  return email;
};

const findUser = async (email) => {
  const model = await User.findOne({
    where: { email },
  });
  if (model === null) return email;
  throw foundUser('User already registered');
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getById = async (id) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { id },
  });
  return user;
};

module.exports = {
  createUser,
  validateUser,
  findUser,
  getAll,
  getById,
};