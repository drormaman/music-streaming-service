const { Router } = require("express");
const router = Router();
const { Song, Artist, Album, Playlist } = require("../models");

router.use("/artist", require("./artist"));
router.use("/album", require("./album"));
router.use("/playlist", require("./playlist"));
router.use("/song", require("./song"));

router.get("/top_artists", async (req, res) => {
	const topArtists = await Artist.findAll({ limit: 20 });
	return res.send(topArtists);
});
router.get("/top_albums", async (req, res) => {
	const topAlbums = await Album.findAll({
		limit: 20,
		include: { model: Artist, attributes: ["name"] }
	});
	return res.json(topAlbums);
});
router.get("/top_playlists", async (req, res) => {
	const topPlaylists = await Playlist.findAll({ limit: 20 });
	return res.json(topPlaylists);
});
router.get("/top_songs", async (req, res) => {
	const topSongs = await Song.findAll({
		limit: 20,
		include: { model: Artist, attributes: ["name", "coverImg"] }
	});
	return res.json(topSongs);
});

module.exports = router;
