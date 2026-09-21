
module.exports = {
  async up (queryInterface, Sequelize) {
  
   return queryInterface.createTable('customers', { 
    id:{ 
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIcrement:true,
      primarykey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });
  },

  async down (queryInterface, Sequelize) {
  
    return queryInterface.dropTable('customers');
     
  }
};
