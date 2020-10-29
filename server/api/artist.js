const { Router } = require("express");
const router = Router();
const { Artist, Song } = require("../models");

// GET request to /artist/123 returns the artist 123
router.get("/:id", async (req, res) => {
	const artist = await Artist.findByPk(req.params.id);
	return res.json(artist);
});
router.get("/:id/songs", async (req, res) => {
	const artist = await Artist.findOne({
		where: { id: req.params.id },
		include: Song
	});
	return res.json(artist);
});

module.exports = router;
