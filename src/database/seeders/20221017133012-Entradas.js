'use strict';

let entradas = [
  {
    nombre: 'Degustacion de Nigiris',
    precio: 3500,
    descripcion: 'Salmon rosado ahumado con langostinos y pulpo español',
    celiaco: 0,
    veg:0,
    categoriaId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Empanadas',
    precio: 500,
    descripcion: 'Empanadas cortadas a cutucuchillo y mucho amor',
    celiaco: 0,
    veg:0,
    categoriaId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Rabas',
    precio: 1900,
    descripcion: 'Rabas traidas del mar baltico con salsa alioli super saladas, prepara la billetera y el trago',
    celiaco: 0,
    veg:0,
    categoriaId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Bastones de Mozzarella',
    precio: 500,
    descripcion: 'Bastoncitos hechos con los sobrantes de la pizza, son raros pero es lo que quedo y vendemos todo aca',
    celiaco: 0,
    veg:0,
    categoriaId: 6,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Picada para compartir',
    precio: 1000,
    descripcion: 'Clasica picada con 3 pancitos y 1000 cosas para ponerle viene con jamon, queso, salame, aceitunas y roquefort',
    celiaco: 0,
    veg:0,
    categoriaId: 7,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Aros de cebolla',
    precio: 500,
    descripcion: 'Aros de cebolla armados con una maquina especial por que ninguno pudo hacerlo por cuenta propia',
    celiaco: 0,
    veg:1,
    categoriaId: 7,
    createdAt: new Date,
    updatedAt: new Date
  }
  
]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Entradas', entradas, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Entradas', null, {});
  }
};

