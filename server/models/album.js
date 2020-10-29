"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Album extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Artist, { foreignKey: "artistId" });
			this.hasMany(models.Song, { foreignKey: "albumId" });
		}
	}
	Album.init(
		{
			name: DataTypes.STRING,
			coverImg: { type: DataTypes.TEXT, field: "cover_img" },
			artistId: { type: DataTypes.INTEGER, field: "artist_id" },
			uploadAt: { type: DataTypes.DATE, field: "upload_at" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Album",
			paranoid: true
		}
	);
	return Album;
};
