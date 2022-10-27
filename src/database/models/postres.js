'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Postres.hasMany(models.Menus,{
        as: 'postres',
        foreignKey: 'postresId'
      })
      Postres.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Postres.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    celiaco: DataTypes.STRING,
    veg: DataTypes.TINYINT,
    imagen:DataTypes.STRING,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Postres',
  });
  return Postres;
};