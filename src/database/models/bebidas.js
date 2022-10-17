'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bebidas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bebidas.belongsTo(models.Marcas,{
        as: 'marca',
        foreignKey: 'marcaId'
      })
      Bebidas.hasMany(models.Menus,{
        as: 'menu',
        foreignKey: 'bebidasId'
      })
    }
  }
  Bebidas.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    litrosDimensionales: DataTypes.STRING,
    marea: DataTypes.TINYINT,
    conGas: DataTypes.TINYINT,
    dieta: DataTypes.TINYINT,
    marcaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bebidas',
  });
  return Bebidas;
};