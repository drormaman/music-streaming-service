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
			// {
			// 	name: "Who Killed Matt Maeson",
			// 	coverImg:
			// 		"https://img.discogs.com/UnsRjd2GUhB1eRUYWlO_88j_QI4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15330990-1589839684-9187.jpeg.jpg",
			// 	artistId: 1,
			// 	uploadAt: new Date(),
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
			// {
			// 	name: "Exident",
			// 	coverImg:
			// 		"https://img.discogs.com/tM-r6AroNndPzY1xBJPwHfgtuLI=/600x435/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-6289096-1532255768-1265.jpeg.jpg",
			// 	artistId: 2,
			// 	uploadAt: new Date(),
			// 	createdAt: new Date(),
			// 	updatedAt: new Date()
			// },
			{
				name: "Off the Radar",
				coverImg:
					"https://www.disccenter.co.il/content/products/prodimage_39401.jpg",
				artistId: 3,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Neotheater",
				coverImg:
					"https://images-na.ssl-images-amazon.com/images/I/81zKpNSNK1L._SL1500_.jpg",
				artistId: 4,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Evolve",
				coverImg:
					"https://img.discogs.com/kzBbtSKVGo_vQlIIjm39kCKUggs=/fit-in/600x537/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10468566-1511454010-1013.jpeg.jpg",
				artistId: 5,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Sadnecessary",
				coverImg:
					"https://img.discogs.com/uJa6kB8KI9EqvrevL5AeKKfM-8Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4722844-1378281821-5555.jpeg.jpg",
				artistId: 6,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Holywood's Bleeding",
				coverImg:
					"https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png",
				artistId: 7,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Exit Inside",
				coverImg:
					"https://s.mxmcdn.net/images-storage/albums/3/8/4/1/6/7/30761483_800_800.jpg",
				artistId: 8,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "In Between Dreams",
				coverImg:
					"https://images-na.ssl-images-amazon.com/images/I/81jityQUXyL._SL1400_.jpg",
				artistId: 9,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Hot Fuss",
				coverImg:
					"https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png",
				artistId: 10,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Time for Us to Move",
				coverImg: "https://f4.bcbits.com/img/a2149399515_10.jpg",
				artistId: 11,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Someday Tomorrow Maybe",
				coverImg: "https://f4.bcbits.com/img/a0770049840_10.jpg",
				artistId: 12,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Music To Be Murdered By",
				coverImg:
					"https://upload.wikimedia.org/wikipedia/he/thumb/d/df/Eminem_-_Music_to_Be_Murdered_By_alt.png/250px-Eminem_-_Music_to_Be_Murdered_By_alt.png",
				artistId: 13,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Now, Not Yet",
				coverImg:
					"https://upload.wikimedia.org/wikipedia/en/0/00/Half_Alive_Now%2C_Not_Yet.jpg",
				artistId: 14,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Babel",
				coverImg:
					"https://images-na.ssl-images-amazon.com/images/I/A1VHqf92e0L._SL1500_.jpg",
				artistId: 15,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Built On Glass",
				coverImg:
					"https://img.discogs.com/tOv-UpDH_x_5KHxbbH1V-p5HYqs=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5658684-1579074269-2822.jpeg.jpg",
				artistId: 16,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Lady Lady",
				coverImg:
					"https://i.pinimg.com/originals/b0/93/b7/b093b7259dd7547053fdbf8464f110c4.jpg",
				artistId: 17,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Favorite Worst Nightmare",
				coverImg: "https://m.media-amazon.com/images/I/71Zz5VqPhfL._SS500_.jpg",
				artistId: 18,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "What a Time To Be Alive",
				coverImg: "https://m.media-amazon.com/images/I/81KAQEgI89L._SS500_.jpg",
				artistId: 19,
				uploadAt: new Date(),
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				name: "Popstar: Never Stop Never Stopping",
				coverImg:
					"https://images-na.ssl-images-amazon.com/images/I/81C34mFSwQL._SX355_.jpg",
				artistId: 20,
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
