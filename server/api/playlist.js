const { Router } = require("express");
const router = Router();
const { Playlist } = require("../models");

// GET request to /album/123 returns the album 123
router.get("/:playlistId", async (req, res) => {
	const playlist = await Playlist.findByPk(req.params.playlistId);
	return res.json(playlist);
});

router.get("/:playlistId/songs", async (req, res) => {
	const playlist = await Playlist.findByPk(req.params.playlistId);
	const songs = await playlist.getSongs();
	return res.json(songs);
});

router.post("/", async (req, res) => {
	const newPlaylist = req.body;
	const playlist = await Playlist.create({
		name: newPlaylist.name,
		coverImg: newPlaylist.coverImg,
		uploadAt: new Date(),
		createdAt: new Date(),
		updatedAt: new Date()
	});
	return res.json(playlist);
});

router.put("/:playlistId", async (req, res) => {
	const newPlaylist = req.body;
	const playlist = await Playlist.update(
		{
			name: newPlaylist.name,
			coverImg: newPlaylist.coverImg,
			updatedAt: new Date()
		},
		{ where: { id: req.params.playlistId } }
	);
	return res.send(playlist);
});

router.delete("/:playlistId", async (req, res) => {
	const deletedPlaylist = Playlist.destroy({
		where: { id: req.params.playlistId }
	});
	return res.json(deletedPlaylist);
});

module.exports = router;
