const { Router } = require("express");
const router = Router();
const { Album } = require("../models");

// GET request to /album/123 returns the album 123
router.get("/:albumId", async (req, res) => {
	const album = await Album.findByPk(req.params.albumId);
	return res.json(album);
});

router.get("/:albumId/songs", async (req, res) => {
	const album = await Album.findByPk(req.params.albumId);
	const songs = await album.getSongs();
	return res.json(songs);
});

router.post("/", async (req, res) => {
	const newAlbum = req.body;
	const album = await Album.create({
		name: newAlbum.name,
		artistId: newAlbum.artistId,
		coverImg: newAlbum.coverImg,
		uploadAt: new Date(),
		createdAt: new Date(),
		updatedAt: new Date()
	});
	return res.json(album);
});

router.put("/:albumId", async (req, res) => {
	const newAlbum = req.body;
	const album = await Album.update(
		{
			name: newAlbum.name,
			artistId: newAlbum.artistId,
			coverImg: newAlbum.coverImg,
			updatedAt: new Date()
		},
		{ where: { id: req.params.albumId } }
	);
	return res.json(album);
});

router.delete("/:albumId", async (req, res) => {
	const deletedAlbum = Album.destroy({ where: { id: req.params.albumId } });
	return res.json(deletedAlbum);
});

module.exports = router;
