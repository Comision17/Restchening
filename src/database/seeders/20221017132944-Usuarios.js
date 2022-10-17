'use strict';

/* Usuarios.init {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    telefono: DataTypes.STRING,
    tarjeta: DataTypes.STRING,
    dni: DataTypes.STRING,
    localidad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    perfil: DataTypes.STRING,
    Rol: DataTypes.STRING
  } */
  let usuarios = {
    nombre: 'Cristian',
    apellido: 'Elias',
    email: 'cris@gmail.com',
    password: 'supercontraseñasecreta',
    telefono: '+5492616048911',
    tarjeta: 'de Credito Porfa',
    dni: '17962345',
    localidad: 'Godoy Cruz',
    provincia: 'Mendoza',
    perfil:'imagen1.jpg',
    Rol: 'Administrador',
    createdAt: new Date,
    updatedAt: new Date
  }

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
