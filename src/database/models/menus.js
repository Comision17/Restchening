'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menus.belongsTo(models.Entradas,{
        as: 'entradas',
        foreignKey: 'entradasId'
      })
      Menus.belongsTo(models.Bebidas,{
        as: 'bebidas',
        foreignKey: 'bebidasId'
      })
      Menus.belongsTo(models.Platos,{
        as: 'platos',
        foreignKey: 'platosId'
      })
      Menus.belongsTo(models.Postres,{
        as: 'postres',
        foreignKey: 'postresId'
      })
      Menus.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Menus.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    entradasId: DataTypes.INTEGER,
    bebidasId: DataTypes.INTEGER,
    postresId: DataTypes.INTEGER,
    platosId:DataTypes.INTEGER,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menus',
  });
  return Menus;
};