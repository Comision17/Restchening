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

    let sucursales = sucursalesNombre.map(sucursal => {
      let elemento = {
        nombre: sucursal.nombre,
        direccion: 'Calle falsa al 123',
        localidad: sucursal.localidad,
        contacto: sucursal.contacto,
        codigoPostal: sucursal.codigoPostal,
        email: 'emailFalso@gmail.com',
        encargados: sucursal.encargados,
        horario: '10am - 12pm',
        createdAt: new Date,
        updatedAt: new Date
      }
      return elemento
    })

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Sucursales', sucursales, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Sucursales', null, {});
  }
};
