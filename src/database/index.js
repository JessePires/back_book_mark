import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

// Models
import BookMark from '../app/models/BookMark';
import Link from '../app/models/Link';

// Buffer
const models = [
  BookMark,
  Link,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // Inicializa conexao
    this.connection = new Sequelize(DatabaseConfig);

    // Percorre o vetor e acessa o método inicializador e associações
    models
      .map((model) => model.init(this.connection));
      // .map(
      //   (model) => model.associate && model.associate(this.connection.models)
      // );
  }
}

export default new Database();
