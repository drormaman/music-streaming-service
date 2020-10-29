"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class SongInPlaylist extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	SongInPlaylist.init(
		{
			playlistId: { type: DataTypes.INTEGER, field: "playlist_id" },
			songId: { type: DataTypes.INTEGER, field: "song_id" },
			uploadAt: { type: DataTypes.DATE, field: "upload_at" },
			deletedAt: { type: DataTypes.DATE, field: "deleted_at" }
		},
		{
			sequelize,
			modelName: "SongInPlaylist",
			paranoid: true
		}
	);
	return SongInPlaylist;
};
