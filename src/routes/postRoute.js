const { Router } = require('express');
const { getAllController, getByIdConltroller, updateController } = require('../controllers/post');
const tokenMidd = require('../middlewares/tokenMidd');

const postRoute = Router();

postRoute.get('/', tokenMidd, getAllController);
postRoute.get('/:id', tokenMidd, getByIdConltroller);
postRoute.put('/:id', tokenMidd, updateController);

module.exports = postRoute;