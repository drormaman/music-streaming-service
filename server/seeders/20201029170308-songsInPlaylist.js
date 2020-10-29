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
		await queryInterface.bulkInsert(
			"SongInPlaylists",
			[
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					song_id: Math.floor(Math.random() * 11) + 1,
					playlist_id: Math.floor(Math.random() * 9) + 1,
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				}
			],
			{}
		);
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
