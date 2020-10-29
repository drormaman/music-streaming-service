"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 *
		 */
		await queryInterface.bulkInsert(
			"Albums",
			[
				{
					name: "Who Killed Matt Maeson",
					cover_img:
						"https://img.discogs.com/UnsRjd2GUhB1eRUYWlO_88j_QI4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-15330990-1589839684-9187.jpeg.jpg",
					artist_id: "1",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Exident",
					cover_img:
						"https://img.discogs.com/tM-r6AroNndPzY1xBJPwHfgtuLI=/600x435/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-6289096-1532255768-1265.jpeg.jpg",
					artist_id: "2",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Off the Radar",
					cover_img:
						"https://www.disccenter.co.il/content/products/prodimage_39401.jpg",
					artist_id: "3",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Neotheater",
					cover_img:
						"https://images-na.ssl-images-amazon.com/images/I/81zKpNSNK1L._SL1500_.jpg",
					artist_id: "4",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Evolve",
					cover_img:
						"https://img.discogs.com/kzBbtSKVGo_vQlIIjm39kCKUggs=/fit-in/600x537/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-10468566-1511454010-1013.jpeg.jpg",
					artist_id: "5",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Sadnecessary",
					cover_img:
						"https://img.discogs.com/uJa6kB8KI9EqvrevL5AeKKfM-8Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4722844-1378281821-5555.jpeg.jpg",
					artist_id: "6",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Holywood's Bleeding",
					cover_img:
						"https://upload.wikimedia.org/wikipedia/en/5/58/Post_Malone_-_Hollywood%27s_Bleeding.png",
					artist_id: "7",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Exit Inside",
					cover_img:
						"https://s.mxmcdn.net/images-storage/albums/3/8/4/1/6/7/30761483_800_800.jpg",
					artist_id: "8",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "In Between Dreams",
					cover_img:
						"https://images-na.ssl-images-amazon.com/images/I/81jityQUXyL._SL1400_.jpg",
					artist_id: "9",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Hot Fuss",
					cover_img:
						"https://upload.wikimedia.org/wikipedia/en/1/17/The_Killers_-_Hot_Fuss.png",
					artist_id: "10",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Time for Us to Move",
					cover_img: "https://f4.bcbits.com/img/a2149399515_10.jpg",
					artist_id: "11",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Someday Tomorrow Maybe",
					cover_img: "https://f4.bcbits.com/img/a0770049840_10.jpg",
					artist_id: "12",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Music To Be Murdered By",
					cover_img:
						"https://upload.wikimedia.org/wikipedia/he/thumb/d/df/Eminem_-_Music_to_Be_Murdered_By_alt.png/250px-Eminem_-_Music_to_Be_Murdered_By_alt.png",
					artist_id: "13",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Now, Not Yet",
					cover_img:
						"https://upload.wikimedia.org/wikipedia/en/0/00/Half_Alive_Now%2C_Not_Yet.jpg",
					artist_id: "14",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Babel",
					cover_img:
						"https://images-na.ssl-images-amazon.com/images/I/A1VHqf92e0L._SL1500_.jpg",
					artist_id: "15",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Built On Glass",
					cover_img:
						"https://img.discogs.com/tOv-UpDH_x_5KHxbbH1V-p5HYqs=/fit-in/600x590/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5658684-1579074269-2822.jpeg.jpg",
					artist_id: "16",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Lady Lady",
					cover_img:
						"https://i.pinimg.com/originals/b0/93/b7/b093b7259dd7547053fdbf8464f110c4.jpg",
					artist_id: "17",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Favorite Worst Nightmare",
					cover_img:
						"https://m.media-amazon.com/images/I/71Zz5VqPhfL._SS500_.jpg",
					artist_id: "18",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "What a Time To Be Alive",
					cover_img:
						"https://m.media-amazon.com/images/I/81KAQEgI89L._SS500_.jpg",
					artist_id: "19",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Popstar: Never Stop Never Stopping",
					cover_img:
						"https://images-na.ssl-images-amazon.com/images/I/81C34mFSwQL._SX355_.jpg",
					artist_id: "20",
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
		await queryInterface.bulkDelete("Albums", null, {});
	}
};
