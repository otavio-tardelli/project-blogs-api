const authentication = require('../services/login');

const loginController = async (req, res) => {
   try {
    const token = await authentication(req.body);
    return res.status(200).json(token);
   } catch (e) {
       return res.status(e.status).json({ message: e.message });
   }
};

module.exports = {
    loginController,
};
