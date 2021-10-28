import Sequelize, { Model } from 'sequelize';

class BookMark extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          unique: true,
        },
      },
      {
        sequelize,
        tableName: 'book_mark',
      }
    );

    return this;
  }
}

export default BookMark;
