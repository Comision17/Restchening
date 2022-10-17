'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guarniciones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Guarniciones.hasMany(models.Menus,{
        as: 'guarniciones',
        foreignKey: 'guarnicionesId'
      })
      Guarniciones.belongsTo(models.Categorias,{
        as: 'categoria',
        foreignKey: 'categoriaId'
      })
    }
  }
  Guarniciones.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    aderesos: DataTypes.TINYINT,
    celiaco: DataTypes.STRING,
    veg: DataTypes.TINYINT,
    categoriaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guarniciones',
  });
  return Guarniciones;
};