module.exports = {
  up: async (queryInterface, Sequelize) =>
    // AQUI É FEITA A CRIAÇÃO DO MODEL
    queryInterface.createTable('book_mark', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }
  ),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('book_mark'),
};
