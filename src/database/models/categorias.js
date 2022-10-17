'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categorias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categorias.hasMany(models.Menus,{
        as: 'menus',
        foreignKey: 'categoriaId'
      })
      Categorias.hasMany(models.Entradas,{
        as: 'entrada',
        foreignKey: 'categoriaId'
      })
      Categorias.hasMany(models.Guarniciones,{
        as: 'guarniciones',
        foreignKey: 'categoriaId'
      })
      Categorias.hasMany(models.Postres,{
        as: 'postre',
        foreignKey: 'categoriaId'
      })
    }
  }
  Categorias.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  return Categorias;
};