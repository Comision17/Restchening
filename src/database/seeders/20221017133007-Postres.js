'use strict';

  let postres = [
    {
      nombre: 'Flan',
      precio: 500,
      descripcion: 'Todavia no probaste esta delicia y manjar del paraiso?, pedila, viene con crema y Dulce de leche bien Argentino',
      celiaco: 1,
      veg: 0,
      categoriaId: 4,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'Tiramisu',
      precio: 500,
      descripcion: 'El mejor tiramisu que probaste en el mundo, bueno ese no, este zafa',
      celiaco: 0,
      veg: 0,
      categoriaId: 4,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'Lemon Pie',
      precio: 500,
      descripcion: 'Acido como los chistes que se te ocurren cuando vas a un stadUp',
      celiaco: 0,
      veg: 0,
      categoriaId: 4,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      nombre: 'Brownie',
      precio: 500,
      descripcion: 'Todavia no probaste esta delicia y manjar del paraiso?, pedila, viene con crema y Dulce de leche bien Argentino',
      celiaco: 0,
      veg: 0,
      categoriaId: 4,
      createdAt:new Date,
      updatedAt:new Date
    }
  ]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Postres', postres, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Postres', null, {});
  }
};
