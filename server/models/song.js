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
			this.belongsTo(models.Artist, { foreignKey: "artistId" });
			this.belongsTo(models.Album, { foreignKey: "albumId" });
			this.belongsToMany(models.Playlist, {
				through: models.SongInPlaylist,
				uniqueKey: "songIds"
			});
		}
	}
	Song.init(
		{
			title: DataTypes.STRING,
			youtubeLink: { type: DataTypes.STRING, field: "youtube_link" },
			artistId: { type: DataTypes.INTEGER, field: "artist_id" },
			albumId: { type: DataTypes.INTEGER, field: "album_id" },
			length: DataTypes.INTEGER,
			trackNumber: { type: DataTypes.INTEGER, field: "track_number" },
			lyrics: DataTypes.TEXT,
			uploadAt: { type: DataTypes.DATE, field: "upload_at" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "Song",
			paranoid: true
		}
	);
	return Song;
};
