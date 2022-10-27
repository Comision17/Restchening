'use strict';


let guarniciones = [
  {
    nombre: 'Papas Fritas Grandes',
    precio: 1000,
    descripcion: 'Papitas como nunca antes probaste, vienen con cebollin y bacon, con un extra de cheddar encima',
    aderesos:'Cheddar,Bacon,verdeo,ciboulette',
    celiaco: 0,
    veg: 1,
    categoriaId:5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Papas Fritas Medianas',
    precio: 800,
    descripcion: 'Papitas como nunca antes probaste, Para los indecisos, ni chico ni grande, medianas y aburridas como la gran mayoria de los que siempre piden medianas',
    aderesos:'Cheddar,Bacon,verdeo,ciboulette',
    celiaco: 0,
    veg: 1,
    categoriaId:5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Papas Fritas chicas',
    precio: 600,
    descripcion: 'Papitas como nunca antes probaste, para quedarse con hambre y pedir mas',
    aderesos:'Cheddar,Bacon,verdeo,ciboulette',
    celiaco: 0,
    veg: 1,
    categoriaId:5,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Cesar',
    precio: 1200,
    descripcion: 'Esta Cesar va a conquistar tu paladar y tu corazon',
    aderesos:'CESAR COMO EL NOMBRE DE LA ENSALADA,vinagre,sal,aceite y limon',
    celiaco: 1,
    veg: 1,
    categoriaId:8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Rusa',
    precio: 600,
    descripcion: 'Esta ensalada se toma con un votka que siempre nos podes pedir',
    aderesos:'Mayonesa y sal',
    celiaco: 1,
    veg: 1,
    categoriaId:8,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'mixta',
    precio: 600,
    descripcion: 'Esta ensalada se toma con un votka que siempre nos podes pedir',
    aderesos:'Aceite de oliva, vinagre o aceto',
    celiaco: 1,
    veg: 1,
    categoriaId:8,
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Guarniciones', guarniciones, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Guarniciones', null, {});
  }
};
