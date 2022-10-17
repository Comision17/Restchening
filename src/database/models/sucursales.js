'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sucursales extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sucursales.init({
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING,
    contacto: DataTypes.STRING,
    codigoPostal: DataTypes.INTEGER,
    email: DataTypes.STRING,
    encargados: DataTypes.STRING,
    horario: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sucursales',
  });
  return Sucursales;
};