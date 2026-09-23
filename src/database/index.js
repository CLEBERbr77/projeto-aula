import Sequelize from "sequelize";
import config from "../config/database";
import Customer from "../app/models/customer";

const models = [Customer];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();