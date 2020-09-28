'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Album.init({
    name: DataTypes.STRING,
    coverImg: DataTypes.TEXT,
    artistId: DataTypes.INTEGER,
    uploadAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};