const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign({ data: payload }, secret, jwtConfig);

module.exports = {
    generateToken,
};
