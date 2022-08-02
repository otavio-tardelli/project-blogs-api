const { Router } = require('express');
const { userController, getAllController, getByIdController } = require('../controllers/user');
const tokenMidd = require('../middlewares/tokenMidd');

const userRoute = Router();

userRoute.post('/', userController); 
userRoute.get('/', tokenMidd, getAllController);
userRoute.get('/:id', tokenMidd, getByIdController);

module.exports = userRoute;