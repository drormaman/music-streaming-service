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
		await queryInterface.bulkInsert("artists", [
			{
				name: "Matt Meason",
				coverImg:
					"https://entertainermag.com/wp-content/uploads/2019/05/Matt-Maeson.jpg",
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Dennis Lloyd",
				coverImg: "https://i.ytimg.com/vi/GuLTb9cYHWE/maxresdefault.jpg",
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
		await queryInterface.bulkDelete("artists", null, {});
	}
};
