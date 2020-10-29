const { Router } = require("express");
const router = Router();
const { Playlist, Artist, Song } = require("../models");

// GET request to /artist/123 returns the artist 123
router.get("/:id", async (req, res) => {
	const playlist = await Playlist.findByPk(req.params.id);
	return res.json(playlist);
});
router.get("/:id/songs", async (req, res) => {
	const playlist = await Playlist.findOne({
		where: { id: req.params.id },
		include: { model: Song, include: Artist, through: { attributes: [] } }
	});
	return res.json(playlist);
});

module.exports = router;
