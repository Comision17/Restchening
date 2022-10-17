'use strict';

let marcas = ['CocaCola','Pepsi','Manaos','La Vichi Ahora','Naranpol','Kitchening Bar','Havana','Smirnoff','brugal','Quilmes','Andes','INCA','Salta Cautiva','Cunnington','Corona']

marcas = marcas.map(marca => {
  let elemento = {
    nombre : marca,
    createdAt: new Date,
    updatedAt: new Date
  }
  return elemento
})

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Marcas', marcas, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Marcas', null, {});
  }
};
