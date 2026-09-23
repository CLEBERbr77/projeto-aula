const { STRING } = require("sequelize");

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users', { 
      
        id: {
          type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        },
        email: {
         type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
         type: Sequelize.STRING,
        allowNull: false,
      },
      provider: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: false,
      },
      created_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      });
  },
   down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
