const { Router } = require("express");
const { Artist } = require("../models");
const router = Router();

router.get("/", async (req, res) => {
	const artist = await Artist.findAll();
	return res.send(artist);
});

router.get("/:artistId", async (req, res) => {});

router.get("/:artistId/songs", async (req, res) => {
	const artist = await Artist.findByPk(req.params.artistId);
	const songs = await artist.getSongs();
	// console.log('The first phone', allArtists[0].phoneNumber)
	return res.json(songs);
});

module.exports = router;
