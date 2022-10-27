'use strict';

let categorias = [
  {
    nombre: 'Plato Principal',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Plato del dia',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Pastas',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Especiales',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Rapidos',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Calientes',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Frios',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    nombre: 'Ensaladas',
    createdAt:new Date,
    updatedAt:new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Categorias', categorias, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Categorias', null, {});
  }
};
