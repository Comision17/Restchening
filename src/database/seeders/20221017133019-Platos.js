'use strict';

/* nombre: DataTypes.STRING,
    precio: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    aderesos: DataTypes.STRING,
    celiaco: DataTypes.STRING,
    veg: DataTypes.TINYINT,
    categoriaId: DataTypes.INTEGER */

let platos = [
  {
    nombre: 'Milanesa a caballo',
    precio: 1500,
    descripcion: 'Milanesa de la realeza, no quiso caminar y vino en caballo blaco con huevos, papitas y magia',
    aderesos:'Trae si vos queres un poco de ketchup y mayonesa, pero despues no vas a poder respirar',
    celiaco:0,
    veg:0,
    categoriaId:1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Guiso de fideo moñito',
    precio: 800,
    descripcion: 'Guisito caliente especial para un dia de frio con moñitos desarmados y mucho pure de tomate',
    aderesos:'zanahoria, cebolla, ajo, especias, pollo(?)',
    celiaco: 0,
    veg: 0,
    categoriaId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Ceviche',
    precio: 1800,
    descripcion: 'Varios tipos de pescado, mariscos, limón, lechuga, cebolla, cilantro, maíz',
    aderesos:'no creo',
    celiaco: 1,
    veg: 0,
    categoriaId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Lasagna',
    precio: 1500,
    descripcion: 'Tenemos el record mundial y reconocido por la afa de la lasagna mas grande del mundo ojo al dato, te recomiendo venir acompañado de 10 personas minimo y el precio es por porcion',
    aderesos:'no creo',
    celiaco: 0,
    veg: 0,
    categoriaId: 3,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    nombre: 'Asado para 2',
    precio: 1500,
    descripcion: 'Asado mas seco que tu bolsillo, Si sos turista, esta quemado, por que aca no servimos un asado crudo ni en millones de años',
    aderesos:'un chimichurri que encontramos en casa de nuestra abuela y debe tener como 8 años minimo',
    celiaco: 1,
    veg: 0,
    categoriaId: 1,
    createdAt: new Date,
    updatedAt: new Date
  }
]

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Platos', platos, {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Platos', null, {});
  }
};

