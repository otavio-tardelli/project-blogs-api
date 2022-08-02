const { Router } = require('express');
const { categoryController, getAllController } = require('../controllers/category');
const tokenMidd = require('../middlewares/tokenMidd');

const categoryRoute = Router();

categoryRoute.post('/', tokenMidd, categoryController);
categoryRoute.get('/', tokenMidd, getAllController);

module.exports = categoryRoute;