const Joi = require('joi');
const { Category } = require('../database/models');

const validateCategory = async (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const result = await schema.validateAsync(user);
  return result;
};

const createCategory = async (data) => {
  const model = await Category.create(data);
  return model;
};

const getAllCategory = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  validateCategory,
  createCategory,
  getAllCategory,
};
