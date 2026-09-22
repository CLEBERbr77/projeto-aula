
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contact', {
       id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
         type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      customer_id : {
      type: Sequelize.INTEGER,
      refereces: { model: "customers", key: "id"},
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('contact');
  },
};
