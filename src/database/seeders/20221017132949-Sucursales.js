'use strict';

let sucursalesNombre = [
  {
    nombre : 'LA POSTA',
    localidad:'La Rioja',
    contacto:'@LaPostaRestoBar',
    codigoPostal:5896,
    encargados:'Alen'
  },{
    nombre: 'ANTOJITO',
    localidad:'Cordoba: Jesus Maria',
    contacto:'@elAntojito23',
    codigoPostal:4930,
    encargados:'Mauricio'
  },{
    nombre:'Pollos Hermanos',
    localidad: 'Maiamee: la plata',
    contacto:'@ThePooiosBros',
    codigoPostal:3568,
    encargados:'Micaela'
  }
]

/* nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    contacto: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    email: DataTypes.STRING,
    encargados: DataTypes.STRING,
    horario: DataTypes.DATE */

    let sucursales = sucursalesNombre.map(sucursal => {
      let e = {
        nombre: sucursal.nombre,
        direccion,
        localidad,
        contacto,
        codigoPostal,
        email,
        encargados,
        horario,
        createdAt:new Date,
        updatedAt:new Date
      }
    })
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Sucursales', sucursales, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Sucursales', null, {});
  }
};
