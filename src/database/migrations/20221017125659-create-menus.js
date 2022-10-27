'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
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
      entradasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Entradas'
          },
          key: 'id'
        }, 
      },
      bebidasId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Bebidas'
          },
          key: 'id'
        }, 
      },
      guarnicionesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Guarniciones'
          },
          key: 'id'
        }, 
      },
      postresId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Postres'
          },
          key: 'id'
        }, 
      },
      platosId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Platos'
          },
          key: 'id'
        }, 
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
    await queryInterface.dropTable('Menus');
  }
};