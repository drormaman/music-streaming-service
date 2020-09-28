"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		const playlistSongs = [];
		for (let i = 0; i < 50; i++) {
			const currentRow = {
				playlistId: Math.floor(Math.random() * 8) + 1,
				songId: Math.floor(Math.random() * 20) + 1,
				createdAt: new Date(),
				updatedAt: new Date()
			};
			playlistSongs.push(currentRow);
		}
		await queryInterface.bulkInsert("SongInPlaylists", playlistSongs);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("SongInPlaylists", null, {});
	}
};
