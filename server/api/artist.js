const { Router } = require("express");
const router = Router();
const { Artist } = require("../models");

router.get("/", async (req, res) => {
	const artists = await Artist.findAll();
	return res.send(artists);
});

// a GET request to /artist/123 returns the artist 123
router.get("/:artistId", async (req, res) => {
	const artist = await Artist.findByPk(req.params.artistId);
	return res.json(artist);
});

router.get("/:artistId/songs", async (req, res) => {
	const artist = await Artist.findByPk(req.params.artistId);
	const songs = await artist.getSongs();
	return res.json(songs);
});

router.post("/", async (req, res) => {
	const newArtist = req.body;
	const artist = await Artist.create({
		name: newArtist.name,
		coverImg: newArtist.coverImg,
		uploadAt: new Date(),
		createdAt: new Date(),
		updatedAt: new Date()
	});
	return res.json(artist);
});

router.put("/:artistId", async (req, res) => {
	const newArtist = req.body;
	const artist = await Artist.update(
		{
			name: newArtist.name,
			coverImg: newArtist.coverImg,
			updatedAt: new Date()
		},
		{ where: { id: req.params.artistId } }
	);
	return res.json(artist);
});

router.delete("/:artistId", async (req, res) => {
	const deletedArtist = Artist.destroy({ where: { id: req.params.artistId } });
	return res.json(deletedArtist);
});

module.exports = router;
