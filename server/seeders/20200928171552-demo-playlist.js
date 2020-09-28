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
		await queryInterface.bulkInsert("playlists", [
			{
				name: "Chill",
				coverImg:
					"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "tired",
				coverImg:
					"https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "New",
				coverImg:
					"https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "FINE FINE FINE",
				coverImg:
					"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "YYY",
				coverImg:
					"https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Y not",
				coverImg:
					"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "O K",
				coverImg:
					"https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "muse ic",
				coverImg:
					"https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Latest and Greatest",
				coverImg:
					"https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		await queryInterface.bulkDelete("playlists", null, {});
	}
};
