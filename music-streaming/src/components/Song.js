import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";

const MainDiv = styled.main`
	height: 100vh;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 1fr 2fr;
	gap: 8px;
`;

const SongDetails = styled.div`
	background-color: #1d1d1d;
	padding-left: 12px;
	color: #cccccc;
	grid-column: 2;
	grid-row: 1;
	display: flex;
	flex-direction: column;
	font-size: 0.85em;
`;

const LyricsButton = styled.button`
	margin: auto 0 12px 0;
	width: 90px;
	height: 20px;
	align-self: flex-start;
	background-color: #cccccc;
	border: none;
	outline: none;
	border-radius: 4px;
`;

const LyricsDiv = styled.div`
	grid-column: 2;
	grid-row: 2;
	background-color: #1d1d1d;
	color: #eeeeee;
	font-size: 0.8em;
	white-space: pre-wrap;
	overflow: auto;
	padding: 12px;
`;

const RelatedList = styled.ul`
	grid-column: 2;
	grid-row: 2;
	list-style: none;
	padding: 0;
	overflow: auto;
`;

const PlayerDiv = styled.div`
	grid-column: 1;
	grid-row: 1/3;
`;

function Song(props) {
	const [song, setSong] = useState({});
	const [album, setAlbum] = useState({});
	const [artist, setArtist] = useState({});
	const [relatedSongs, setRelatesSongs] = useState([]);
	const [showLyrics, setShowLyrics] = useState(false);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const songResponse = await fetch(`/song/${props.match.params.id}`);
		const songData = await songResponse.json();
		setSong(songData);

		const queryArr = props.location.search.slice(1).split("=");
		const relatedData = await fetch(`/${queryArr[0]}/${queryArr[1]}/songs`);
		const relatedSongsArr = await relatedData.json();
		setRelatesSongs(relatedSongsArr);

		const artistResponse = await fetch(`/artist/${songData.artist_id}`);
		const artistData = await artistResponse.json();
		setArtist(artistData);

		const albumResponse = await fetch(`/album/${songData.album_id}`);
		const albumData = await albumResponse.json();
		setAlbum(albumData);
	}

	function durationToString() {
		const minutes = Math.floor(song.duration / 60);
		const seconds = song.duration % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	}
	return (
		<MainDiv>
			<PlayerDiv>
				<iframe
					style={{
						height: "100%",
						width: "100%"
					}}
					src={`https://www.youtube.com/embed/${song.youtube_link}?autoplay=0&controls=0&iv_load_policy=3`}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				/>
			</PlayerDiv>
			<SongDetails>
				<div>
					<h1
						style={{ margin: "8px 0", color: "#fff", display: "inline-block" }}>
						{song.title}
					</h1>
					<span>
						{"  "}({durationToString()})
					</span>
				</div>

				<span>
					Artist:{" "}
					<Link to={`/artist/${artist.id}`} style={{ color: "#cccccc" }}>
						{artist.name}
					</Link>
				</span>

				<span>
					Album:{" "}
					<Link to={`/album/${album.id}`} style={{ color: "#cccccc" }}>
						{album.name}
					</Link>
				</span>
				<LyricsButton onClick={() => setShowLyrics(!showLyrics)}>
					{showLyrics ? "Hide lyrics" : "Show Lyrics"}
				</LyricsButton>
			</SongDetails>
			{showLyrics ? (
				<LyricsDiv>{song.lyrics}</LyricsDiv>
			) : (
				<RelatedList>
					{relatedSongs
						.filter(({ title }) => title !== song.title)
						.map((song, i) => (
							<SongInList
								key={song.id}
								index={i + 1}
								song={song}
								type="small"
							/>
						))}
				</RelatedList>
			)}
		</MainDiv>
	);
}

export default Song;
