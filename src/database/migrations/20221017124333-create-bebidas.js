'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bebidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      litrosDimensionales: {
        type: Sequelize.INTEGER
      },
      marea: {
        type: Sequelize.TINYINT
      },
      conGas: {
        type: Sequelize.TINYINT
      },
      dieta: {
        type: Sequelize.TINYINT
      },
      imagen:{
        type: Sequelize.STRING
      },
      marcaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Marcas'
          },
          key: 'id'
        }, 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bebidas');
  }
};