'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('PostCategories', {
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'BlogPosts',
          id: 'id'
        }  
      },
      categoryId: {
        type:Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'Categories',
          id: 'id'
        }  
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
   await queryInterface.dropTable('PostCategories');
  }
};
