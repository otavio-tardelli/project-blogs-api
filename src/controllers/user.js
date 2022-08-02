const { createUser, validateUser, findUser, getAll, getById } = require('../services/user');
const { generateToken } = require('../utils/JWTToken'); 

const userController = async (req, res) => {
    const result = await validateUser(req.body);
    await findUser(result.email);
    const user = await createUser(result);
    const token = generateToken(user.email);
    return res.status(201).json({ token });
};

const getAllController = async (_req, res) => {
    const result = await getAll();
    return res.status(200).json(result);
};

const getByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getById(id);
        if (result === null) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });    
    }
};

module.exports = {
    userController,
    getAllController,
    getByIdController,
};