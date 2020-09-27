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
				cover_img:
					"https://entertainermag.com/wp-content/uploads/2019/05/Matt-Maeson.jpg",
				upload_at: new Date(),
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				name: "Dennis Lloyd",
				cover_img: "https://i.ytimg.com/vi/GuLTb9cYHWE/maxresdefault.jpg",
				upload_at: new Date(),
				created_at: new Date(),
				updated_at: new Date()
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
