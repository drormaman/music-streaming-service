require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql");
const faker = require("faker");
const solenolyrics = require("solenolyrics");

// async function fetchLyrics(title) {
// 	var lyrics = await solenolyrics.requestLyricsFor(title);
// 	console.log(lyrics);
// }
// fetchLyrics("cringe");

app.use(express.json());
//create connection
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: process.env.DB_PASS,
	database: "music_streaming"
});
// Connect
db.connect(err => {
	err ? console.log(err) : console.log("MySQL connected");
});

// GET TOP 20 OF:
// a GET request to /top_songs/ returns a list of top 20 songs
app.get("/top_songs", (req, res) => {
	const query = `SELECT * FROM song LIMIT 20`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});

app.get("/top_artists", (req, res) => {
	const query = `SELECT * FROM artist LIMIT 20`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a GET request to /top_albums/ returns a list of top 20 albums
app.get("/top_albums", (req, res) => {
	const query = `SELECT * FROM album LIMIT 20`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a GET request to /top_playlist/ returns a list of top 20 playlist
app.get("/top_playlists", (req, res) => {
	const query = `SELECT * FROM playlist LIMIT 20`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});

// TODO LATER => SHOW AND ORDER BY LIKES/VIEWS
// a GET request to /top_songs/ returns a list of top 20 songs
// app.get("/top_songs", (req, res) => {
//   const query = `SELECT title FROM song
//                 join (select song_id from interactions
//                       group by song_id
//                       order by count(is_liked) desc
//                       limit 20) as song_id
//                 on id = song_id`;
//   db.query(query, (err, result) => {
//     if(error) console.log(error);
//     res.send(result);
//   });
// });

// GET SPECIFIED ITEM
// a GET request to /song/123 returns the details of song 123
app.get("/song/:id", (req, res) => {
	db.query(
		`SELECT * FROM song WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result[0]);
		}
	);
});
// return songs of specified artist
app.get("/artist/:id/songs", (req, res) => {
	db.query(
		`SELECT id, title, album_id, artist_id ,duration FROM song WHERE artist_id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});
// a GET request to /artist/123 returns the artist 123
app.get("/artist/:id", (req, res) => {
	db.query(
		`SELECT * FROM artist WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result[0]);
		}
	);
});
// return songs in specified album
app.get("/album/:id/songs", (req, res) => {
	db.query(
		`SELECT id, title, album_id, artist_id ,duration FROM song WHERE album_id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});

// a GET request to /album/123 returns the album 123
app.get("/album/:id", (req, res) => {
	db.query(
		`SELECT * FROM album WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result[0]);
		}
	);
});

// return songs in specified playlist
app.get("/playlist/:id/songs", (req, res) => {
	db.query(
		`SELECT song.id, title, album_id, artist_id,duration FROM songs_in_playlist join song on song_id = song.id
		where playlist_id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});

// a GET request to /playlist/123 returns the playlist 123
app.get("/playlist/:id", (req, res) => {
	db.query(
		`SELECT * FROM playlist WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result[0]);
		}
	);
});

// POST ITEM
// a POST request to /song add to songs
app.post("/song", (req, res) => {
	const songObj = req.body;
	db.query(
		`INSERT INTO song(title, album_id,artist_id,youtube_link,duration, track_number, lyrics, created_at, uploaded_at)
     VALUES ('${songObj.title}',${songObj.albumId},${songObj.artistId}, '${songObj.youtubeLink}', ${songObj.duration}, ${songObj.trackNumber}, ${songObj.lyrics}, ${songObj.createdAt}, ${songObj.uploadedAt})`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});
// a POST request to /artist add to artist
app.post("/artist", (req, res) => {
	const artistObj = req.body;
	db.query(
		`INSERT INTO artist(name, cover_img, uploaded_at) VALUES ('${artistObj.name}','${artistObj.coverImg}', '${artistObj.uploadedAt}')`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});
// a POST request to /album add to album
app.post("/album", (req, res) => {
	const albumObj = req.body;
	db.query(
		`INSERT INTO album(name, artist_id, cover_img, created_at, uploaded_at) 
    VALUES ('${albumObj.name}', '${albumObj.artistId}','${albumObj.coverImg}', ${albumObj.createdAt},'${albumObj.uploadedAt}')`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});
// a POST request to /playlist add to playlist
app.post("/playlist", (req, res) => {
	const playlistObj = req.body;
	db.query(
		`INSERT INTO artist(name, cover_img, uploaded_at, created_at) 
    VALUES ('${playlistObj.name}','${playlistObj.coverImg}','${playlistObj.uploadedAt}', ${playlistObj.createdAt})`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});

// UPDATE ITEM
// a PUT request to /song/123 update the details of song 123
app.put("song/:id", (req, res) => {
	const query = `UPDATE song
  SET title = ${req.body.title},
  album_id =${req.body.albumId},
  artist_id =${req.body.artistId},
  youtube_link = ${req.body.youtubeLink},
  duration = ${req.body.duration},
  track_number = ${req.body.trackNumber},
  lyrics = ${req.body.lyrics},
  WHERE id = ${req.params.id}`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a PUT request to /artist/123 update the artist 123
app.put("artist/:id", (req, res) => {
	const query = `UPDATE artist
  SET name = ${req.body.name},
  cover_img = ${req.body.coverImg}
  WHERE id = ${req.params.id}`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a PUT request to /album/123 update the album 123
app.put("album/:id", (req, res) => {
	const query = `UPDATE album
  SET name = ${req.body.name},
  artist_id =${req.body.artistId},
  cover_img = ${req.body.coverImg}
  WHERE id = ${req.params.id}`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a PUT request to /playlist/123 update the playlist 123
app.put("playlist/:id", (req, res) => {
	const query = `UPDATE playlist
    SET name = ${req.body.name},
    cover_img = ${req.body.coverImg}
    WHERE id = ${req.params.id}`;
	db.query(query, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});

//DELETE ITEM
// a DELETE request to /song/123 delete the details of song 123
app.delete("/song/:id", (req, res) => {
	db.query(`DELETE FROM song WHERE id = ${req.params.id}`, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a DELETE request to /artist/123 delete the artist 123
app.delete("/artist/:id", (req, res) => {
	db.query(
		`DELETE FROM artist WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});
// a DELETE request to /album/123 delete the album 123
app.delete("/album/:id", (req, res) => {
	db.query(`DELETE FROM album WHERE id = ${req.params.id}`, (error, result) => {
		if (error) console.log(error);
		res.send(result);
	});
});
// a DELETE request to /playlist/123 delete the playlist 123
app.delete("/playlist/:id", (req, res) => {
	db.query(
		`DELETE FROM playlist WHERE id = ${req.params.id}`,
		(error, result) => {
			if (error) console.log(error);
			res.send(result);
		}
	);
});

app.listen(8080, () => console.log("server listenning"));
