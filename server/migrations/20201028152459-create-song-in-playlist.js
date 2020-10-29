"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("SongInPlaylists", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			playlist_id: {
				type: Sequelize.INTEGER
			},
			song_id: {
				type: Sequelize.INTEGER
			},
			upload_at: {
				type: Sequelize.DATE
			},
			deleted_at: {
				type: Sequelize.DATE
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("SongInPlaylists");
	}
};
