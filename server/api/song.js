const { Router } = require("express");
const router = Router();
const { Artist, Album, Song } = require("../models");

router.get("/:id", async (req, res) => {
	const song = await Song.findOne({
		where: { id: req.params.id },
		include: [Artist, Album]
	});
	return res.json(song);
});

module.exports = router;
