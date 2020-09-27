"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Song extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Artist);
			this.belongsTo(models.Album);
			this.belongsToMany(models.Playlist, {
				through: models.SongInPlaylist,
				uniqueKey: "playlistId"
			});
		}
	}
	Song.init(
		{
			title: DataTypes.STRING,
			youtubeLink: DataTypes.STRING,
			artistId: DataTypes.INTEGER,
			albumId: DataTypes.INTEGER,
			length: DataTypes.INTEGER,
			trackNumber: DataTypes.INTEGER,
			lyrics: DataTypes.TEXT,
			uploadAt: DataTypes.DATE
		},
		{
			sequelize,
			modelName: "Song"
		}
	);
	return Song;
};
