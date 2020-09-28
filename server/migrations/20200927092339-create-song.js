"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Songs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			youtubeLink: {
				type: Sequelize.STRING
			},
			artistId: {
				type: Sequelize.INTEGER
			},
			albumId: {
				type: Sequelize.INTEGER
			},
			length: {
				type: Sequelize.INTEGER
			},
			trackNumber: {
				type: Sequelize.INTEGER
			},
			lyrics: {
				type: Sequelize.TEXT
			},
			uploadAt: {
				type: Sequelize.DATE
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Songs");
	}
};
