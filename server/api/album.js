const { Router } = require("express");
const router = Router();
const { Album, Artist, Song } = require("../models");

// GET request to /artist/123 returns the artist 123
router.get("/:id", async (req, res) => {
	const album = await Album.findOne({
		where: { id: req.params.id },
		include: Artist
	});
	return res.json(album);
});
router.get("/:id/songs", async (req, res) => {
	const album = await Album.findOne({
		where: { id: req.params.id },
		include: [Artist, Song]
	});
	return res.json(album);
});

module.exports = router;
