'use strict';

let marcas = ['CocaCola','Pepsi','Kitchening Bar','Branca','Havana','Smirnoff','brugal','Quilmes','Andes','INCA','Salta Cautiva','Cunnington','Corona','Naranpol','La Bichi Ahora','Manaos']

    let bebidas = [
        {
          nombre:'Coca Cola',
          precio:300,
          litrosDimensionales: 350,
          marea: 0,
          conGas:1,
          dieta:0,
          marcaId:1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Coca Cola Zero',
          precio:300,
          litrosDimensionales: 350,
          marea: 0,
          conGas:1,
          dieta:1,
          marcaId:1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Gin Tonic',
          precio: 800,
          litrosDimensionales: 350,
          marea: 1,
          conGas: 1,
          dieta: 0,
          marcaId: 3,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Fernet',
          precio: 2000,
          litrosDimensionales: 1000,
          marea: 1,
          conGas: 1,
          dieta: 1,
          marcaId: 4,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Ron',
          precio: 2000,
          litrosDimensionales: 1000,
          marea: 1,
          conGas: 1,
          dieta: 1,
          marcaId: 5,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Cerveza',
          precio: 1000,
          litrosDimensionales: 330,
          marea: 1,
          conGas: 1,
          dieta: 0,
          marcaId: 13,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre:'Vodka',
          precio: 800,
          litrosDimensionales: 350,
          marea: 1,
          conGas: 1,
          dieta: 0,
          marcaId: 6,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre: 'Sprite',
          precio: 300,
          litrosDimensionales: 350,
          marea: 0,
          conGas:1,
          dieta:0,
          marcaId:1,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre: 'Pepsi Cola',
          precio: 300,
          litrosDimensionales: 350,
          marea: 0,
          conGas:1,
          dieta:0,
          marcaId:2,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre: '7up',
          precio: 300,
          litrosDimensionales: 350,
          marea: 0,
          conGas:1,
          dieta:0,
          marcaId:2,
          createdAt: new Date,
          updatedAt: new Date
        },
        {
          nombre: 'Aquarius',
          precio: 300,
          litrosDimensionales: 500,
          marea: 0,
          conGas: 0,
          dieta:0,
          marcaId:1,
          createdAt: new Date,
          updatedAt: new Date
        }
    ]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Bebidas', bebidas, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Bebidas', null, {});
  }
};
