const { BlogPost, User, Category } = require('../database/models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
        include: [{
          model: User, 
          as: 'user',
          attributes: { exclude: ['password'] },
        },
      {
        model: Category,
        as: 'categories',
        through: { attributes: { exclude: ['postId', 'categoryId'] } },
    }],
  });
  return posts;
};

const getById = async (id) => {
  const posts = await BlogPost.findOne({
        include: [{
          model: User, 
          as: 'user',
          attributes: { exclude: ['password'] },
        },
      {
        model: Category,
        as: 'categories',
        through: { attributes: { exclude: ['postId', 'categoryId'] } },
    }],
  where: { id },
  });
  return posts;
};

const updateById = async (id, { title, content }) => {
  const updatePost = await BlogPost.update({
    title,
    content,
  },
  {
    where: { id },
  });
  return updatePost;
};

module.exports = {
  getAll,
  getById,
  updateById,
};