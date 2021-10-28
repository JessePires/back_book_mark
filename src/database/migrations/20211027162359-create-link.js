module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('link', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING
      },

      url: {
        type: Sequelize.STRING,        
      },

      description: {
        type: Sequelize.STRING,
      },

      image: {
        type: Sequelize.STRING,
      },

      id_book_mark: {
        type: Sequelize.STRING,
        foreignKey: true,
        references: {model: 'book_mark', key: 'id'},
        onUpdate: 'CASCADE',
        allowNull: false,
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('link'),
};
