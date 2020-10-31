const { Router } = require("express");
const router = Router();
const { Artist, Album, Song, Playlist } = require("../models");

router.get("/", (req, res) => {
	res.send("apiiii");
});
router.use("/artist", require("./artist"));
router.use("/album", require("./album"));
router.use("/playlist", require("./playlist"));
router.use("/song", require("./song"));

router.get("/top_songs", async (req, res) => {
	const songs = await Song.findAll({
		limit: 10,
		include: [Artist, Album]
	});
	return res.json(songs);
});

router.get("/top_artists", async (req, res) => {
	const artists = await Artist.findAll({
		limit: 10
	});
	return res.json(artists);
});
router.get("/top_albums", async (req, res) => {
	const albums = await Album.findAll({
		limit: 10,
		include: [Artist]
	});
	return res.json(albums);
});
router.get("/top_playlists", async (req, res) => {
	const playlists = await Playlist.findAll({
		limit: 10
	});
	return res.json(playlists);
});

module.exports = router;
