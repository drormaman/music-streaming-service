import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";
import YouTube from "react-youtube";

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

function Song(props) {
	const [song, setSong] = useState({});
	const [index, setIndex] = useState(0);
	const [relatedSongs, setRelatesSongs] = useState([]);
	const [showLyrics, setShowLyrics] = useState(false);
	const queryArr = props.location.search.slice(1).split("=");

	useEffect(() => {
		fetchData();
	}, [props.location]);

	async function fetchData() {
		const songResponse = await fetch(`/song/${props.match.params.id}`);
		const songData = await songResponse.json();
		console.log(songData);
		setSong(songData);

		const relatedData = await fetch(`/${queryArr[0]}/${queryArr[1]}/songs`);
		const relatedSongsArr = await relatedData.json();
		console.log(relatedSongsArr);
		setRelatesSongs(relatedSongsArr);
		setIndex(relatedSongsArr.findIndex(song => song.id === songData.id));
	}

	function durationToString() {
		const minutes = Math.floor(song.duration / 60);
		const seconds = song.duration % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	}

	return (
		<MainDiv>
			<YouTube
				containerClassName={"videoPlayer"}
				style={{ gridColumn: "1", gridRow: "1/3" }}
				videoId={song.youtube_link}
				onEnd={() => {
					console.log("on end", index);
					if (index + 1 === relatedSongs.length) {
						props.history.push("/");
					} else {
						props.history.push(
							`/song/${relatedSongs[index + 1].id}${props.location.search}`
						);
					}
				}}
				opts={{
					height: "100%",
					width: "100%",
					playerVars: { autoplay: 1, controls: 1 }
				}}
			/>
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
					<Link to={`/artist/${song.artist_id}`} style={{ color: "#cccccc" }}>
						{song.artistName}
					</Link>
				</span>

				<span>
					Album:{" "}
					<Link to={`/album/${song.album_id}`} style={{ color: "#cccccc" }}>
						{song.albumName}
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
					{relatedSongs.map((currentSong, i) => (
						<Link
							to={`/song/${currentSong.id}${props.location.search}`}
							key={currentSong.id}>
							<SongInList
								index={i + 1}
								song={currentSong}
								type="small"
								isPlaying={currentSong.id === song.id ? true : false}
							/>
						</Link>
					))}
				</RelatedList>
			)}
		</MainDiv>
	);
}

export default Song;
