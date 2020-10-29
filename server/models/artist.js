"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Artist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.hasMany(models.Album, { foreignKey: "artistId" });
			this.hasMany(models.Song, { foreignKey: "artistId" });
		}
	}
	Artist.init(
		{
			name: DataTypes.STRING,
			coverImg: { type: DataTypes.TEXT, field: "cover_img" },
			uploadAt: { type: DataTypes.DATE, field: "upload_at" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Artist",
			paranoid: true
		}
	);
	return Artist;
};
