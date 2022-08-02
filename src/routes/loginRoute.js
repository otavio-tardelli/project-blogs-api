const { Router } = require('express');
const { loginController } = require('../controllers/login');

const loginRoute = Router();

loginRoute.post('/', loginController);

module.exports = loginRoute;
