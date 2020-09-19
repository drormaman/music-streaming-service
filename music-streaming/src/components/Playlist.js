import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";
import { FaPlay } from "react-icons/fa";

const PlaylistImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 4px;
	object-fit: cover;
`;

const Header = styled.header`
	background-color: #1d1d1d;
	height: 270px;
	display: flex;
	align-items: center;
	padding: 0 10%;
`;

const PlayBtn = styled.button`
	border: none;
	outline: none;
	width: 100px;
	height: 36px;
	margin-top: auto;
	background-color: #fff;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SongsList = styled.ul`
	padding: 0;
	margin: 0 auto;
	background-color: #000;
	width: 80%;
`;

function Playlist(props) {
	const [playlist, setPlaylist] = useState({});
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const playlistResponse = await fetch(`/playlist/${props.match.params.id}`);
		const playlistData = await playlistResponse.json();
		setPlaylist(playlistData);
		const songsResponse = await fetch(
			`/playlist/${props.match.params.id}/songs`
		);
		const songsData = await songsResponse.json();
		setSongs(songsData);
	}

	function timeToString(time) {
		const date = new Date(Date.parse(time));
		return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
	}
	console.log(songs[0]);
	return (
		<main>
			<Header>
				<PlaylistImage src={playlist.cover_img} alt="playlist image" />
				<div
					style={{
						paddingLeft: "36px",
						height: "200px",
						display: "flex",
						flexDirection: "column"
					}}>
					<h2 style={{ color: "#fff", margin: "10px 0" }}>{playlist.name}</h2>
					<p style={{ color: "#aaaaaa", margin: 0 }}>
						Created at: {timeToString(playlist.created_at)}
					</p>
					<PlayBtn>
						<Link
							to={`/song/${songs[0] ? songs[0].id : undefined}?playlist=${
								playlist.id
							}`}>
							<FaPlay style={{ paddingRight: "6px" }} />
							Play
						</Link>
					</PlayBtn>
				</div>
			</Header>
			<SongsList>
				{songs.map(song => {
					return (
						<Link to={`/song/${song.id}?playlist=${playlist.id}`}>
							<SongInList key={song.id} song={song} />
						</Link>
					);
				})}
			</SongsList>
		</main>
	);
}

export default Playlist;
