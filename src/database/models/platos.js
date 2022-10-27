'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Platos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Platos.hasMany(models.Menus,{
        as: 'platos',
        foreignKey: 'platosId'
      })
      Platos.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Platos.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    aderesos: DataTypes.STRING,
    celiaco: DataTypes.STRING,
    veg: DataTypes.TINYINT,
    imagen:DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Platos',
  });
  return Platos;
};