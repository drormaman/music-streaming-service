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
			"Artists",
			[
				{
					name: "Matt Meason",
					cover_img:
						"https://entertainermag.com/wp-content/uploads/2019/05/Matt-Maeson.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Dennis Lloyd",
					cover_img: "https://i.ytimg.com/vi/GuLTb9cYHWE/maxresdefault.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Noga Erez",
					cover_img:
						"https://www.loudandquiet.com/files/2016/12/noga-erez-tim-cochrane-191216-2.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "AJR",
					cover_img:
						"https://www.elicitmagazine.com/wp-content/uploads/2020/04/AJR-Interview-Elicit-Magazine-1200x660.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Imagine Dragons",
					cover_img:
						"https://www.rollingstone.com/wp-content/uploads/2018/11/IMAGINE-DRAGONS-2019-by-Eric-Ray-Davidson.jpg?resize=1800,1200&w=1800",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Milky Chance",
					cover_img:
						"https://www.nme.com/wp-content/uploads/2020/04/Milky-Chance.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Post Malone",
					cover_img:
						"https://pyxis.nymag.com/v1/imgs/fdf/db0/421af17121276a71945282e440357c43cb-25-post-malone-2.rsocial.w1200.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "The Angelcy",
					cover_img:
						"https://www.zappa-club.co.il/download/artistPic/artist_pic74_img.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Jack Johnson",
					cover_img:
						"https://music.mxdwn.com/wp-content/uploads/2017/07/Jack-Johnson.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "The Killers",
					cover_img:
						"https://images.radiox.co.uk/images/59471?width=3000&crop=16_9&signature=lvYHFcIChTp5MTC8fIsiWDn3-oY=",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Full Trunk",
					cover_img:
						"https://kanweb.blob.core.windows.net/download/pictures/2020/3/30/imgid=31098_A.jpeg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Lola Marsh",
					cover_img:
						"https://www.anovamusic.com/public/uploads/59f3b64cb06ef7c4e3078f00fb6da3db3b2522a7.JPG",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Eminem",
					cover_img:
						"https://static.billboard.com/files/2020/04/eminem-press-photo-2019-aqu-billboard-1548-1587659998-1024x677.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Half-Alive",
					cover_img:
						"https://www.frtyfve.com/uploads/images/_articleFull/half-alive.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Mumford and Sons",
					cover_img:
						"https://www.rollingstone.com/wp-content/uploads/2018/11/mumford_and_sons2.jpg",
					upload_at: new Date(),
					updated_at: new Date(),
					created_at: new Date()
				},
				{
					name: "Chet Faker",
					cover_img:
						"https://img.redbull.com/images/c_fill,g_auto,w_1500,h_1000/q_auto,f_auto/redbullcom/2013/08/13/1331606530965_2/chet-faker",
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
		await queryInterface.bulkDelete("Artists", null, {});
	}
};
