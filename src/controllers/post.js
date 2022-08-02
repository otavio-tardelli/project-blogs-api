const { getAll, getById, updateById } = require('../services/post');

const getAllController = async (_req, res) => {
  try {
    const posts = await getAll();
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(404).json({ message: 'AJEITA ISSO AÍ, PAI' });
  }
};

const getByIdConltroller = async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await getById(id);
    if (posts === null) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await updateById(id, req.body);
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllController,
  getByIdConltroller,
  updateController,
};