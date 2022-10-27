'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entradas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Entradas.hasMany(models.Menus,{
        as: 'menu',
        foreignKey: 'entradasId'
      })
      Entradas.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Entradas.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    celiaco: DataTypes.STRING,
    veg: DataTypes.TINYINT,
    imagen:DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entradas',
  });
  return Entradas;
};