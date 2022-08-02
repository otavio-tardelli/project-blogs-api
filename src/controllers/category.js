const { validateCategory, createCategory, getAllCategory } = require('../services/category');

const categoryController = async (req, res) => {
    const result = await validateCategory(req.body);
    const user = await createCategory(result);
    return res.status(201).json(user);
};

const getAllController = async (_req, res) => {
  try {
    const result = await getAllCategory();
    return res.status(200).json(result);
  } catch (error) {
    return res.satus(400).json({ message: 'deu muito ruim' });
  }
};

module.exports = { categoryController, getAllController };