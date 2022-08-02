const { User } = require('../database/models');
const errorObject = require('../helpers/errorObject');
const { generateToken } = require('../utils/JWTToken');

const authentication = async ({ email, password }) => {
    if (!email || !password) {
        throw errorObject[1];
    }
    const user = await User.findOne({
                attributes: ['email', 'password'],
                where: { email, password },
            });
    if (!user) {
        throw errorObject[2];
    } 

    const token = generateToken(user.email);
    return { token };
};

module.exports = authentication;
