import Sequelize, { Model } from 'sequelize';

class Link extends Model {
  static init(sequelize) {
    super.init(
      {
        url: Sequelize.STRING,
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        id_book_mark: Sequelize.STRING,
        image: Sequelize.STRING,
      },

      {
        sequelize,
        tableName: 'link',
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.BookMark, {
      foreignKey: 'id_book_mark',
      as: 'book_mark',
    });
  }
}

export default Link;