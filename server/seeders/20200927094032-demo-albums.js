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
		await queryInterface.bulkInsert("albums", [
			{
				name: "Who Killed Matt Maeson",
				coverImg:
					"https://img.discogs.com/UnsRjd2GUhB1eRUYWlO_88j_QI4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15330990-1589839684-9187.jpeg.jpg",
				artistId: 1,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Exident",
				coverImg:
					"https://img.discogs.com/tM-r6AroNndPzY1xBJPwHfgtuLI=/600x435/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-6289096-1532255768-1265.jpeg.jpg",
				artistId: 2,
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
		await queryInterface.bulkDelete("albums", null, {});
	}
};
