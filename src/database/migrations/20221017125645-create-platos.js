'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Platos', {
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
      descripcion: {
        type: Sequelize.STRING
      },
      aderesos: {
        type: Sequelize.STRING
      },
      celiaco: {
        type: Sequelize.TINYINT
      },
      veg: {
        type: Sequelize.TINYINT
      },
      imagen:{
        type: Sequelize.STRING
      },
      categoriaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Categorias'
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
    await queryInterface.dropTable('Platos');
  }
};