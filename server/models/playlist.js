"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Playlist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.Song, {
				through: models.SongInPlaylist,
				uniqueKey: "songId"
			});
		}
	}
	Playlist.init(
		{
			name: DataTypes.STRING,
			coverImg: DataTypes.TEXT,
			uploadAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: "Playlist"
		}
	);
	return Playlist;
};
