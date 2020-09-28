const { Router } = require("express");
const router = Router();
const { Song, Artist, Album } = require("../models");

router.get("/:songId", async (req, res) => {
	const song = await Song.findByPk(req.params.songId, {
		include: [
			{
				model: Artist,
				attributes: [["name", "artistName"]]
			},
			{ model: Album, attributes: ["name"] }
		],
		raw: true
	});
	return res.json(song);
});

router.post("/", async (req, res) => {
	const newSong = req.body;
	const song = await Song.create({
		title: newSong.title,
		youtubeLink: newSong.youtubeLink,
		artistId: newSong.artistId,
		albumId: newSong.albumId,
		length: newSong.length,
		trackNumber: newSong.trackNumber,
		lyrics: newSong.lyrics,
		uploadAt: new Date(),
		createdAt: new Date(),
		updatedAt: new Date()
	});
	return res.json(song);
});

router.put("/:songId", async (req, res) => {
	const newSong = req.body;
	const song = await Song.update(
		{
			title: newSong.title,
			youtubeLink: newSong.youtubeLink,
			artistId: newSong.artistId,
			albumId: newSong.albumId,
			length: newSong.length,
			trackNumber: newSong.trackNumber,
			lyrics: newSong.lyrics,
			updatedAt: new Date()
		},
		{ where: { id: req.params.songId } }
	);
	return res.send(song);
});

router.delete("/:songId", async (req, res) => {
	const deletedSong = Song.destroy({
		where: { id: req.params.songId }
	});
	return res.json(deletedSong);
});

module.exports = router;
