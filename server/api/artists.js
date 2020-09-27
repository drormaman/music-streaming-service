const { Router } = require("express");
const router = Router();
const { Artist } = require("../models");

router.get("/", async (req, res) => {
	const artists = await Artist.findAll();
	return res.send(artists);
});

router.get("/:artistId", async (req, res) => {
	const artist = await Artist.findByPk(req.params.artistId);
	return res.json(artist);
});

router.get("/:artistId/songs", async (req, res) => {
	const artist = await Artist.findByPk(req.params.artistId);
	const songs = await artist.getSongs();
	return res.json(songs);
});

module.exports = router;
