import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PlaylistImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 10px;
	object-fit: cover;
`;

function Playlist(props) {
	console.log(props.match.params.id);

	const [playlist, setPlaylist] = useState({});
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const playlistResponse = await fetch(`/playlist/${props.match.params.id}`);
		const playlistData = await playlistResponse.json();
		console.log(playlistData);
		setPlaylist(playlistData);
		const songsResponse = await fetch(
			`/playlist/${props.match.params.id}/songs`
		);
		const songsData = await songsResponse.json();
		setSongs(songsData);
		console.log(songsData);
	}
	return (
		<main>
			<div>
				<PlaylistImage src={playlist.cover_img} alt="playlist image" />
				<div>
					<h2>{playlist.name}</h2>
					<p></p>
					<button>play</button>
				</div>
			</div>
			<div>
				<ul>
					{songs.map(song => (
						<li key={song.id}>
							{song.title}, {song.duration}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}

export default Playlist;
