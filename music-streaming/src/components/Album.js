import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";
import PlaylistHeader from "./PlaylistHeader";

const SongsList = styled.ul`
	padding: 0;
	margin: 0 auto;
	background-color: #000;
	width: 80%;
`;

function Album(props) {
	const [album, setAlbum] = useState({});
	const [songs, setSongs] = useState([]);
	useEffect(() => fetchData(), []);
	async function fetchData() {
		const albumResponse = await fetch(`/album/${props.match.params.id}`);
		const albumData = await albumResponse.json();
		setAlbum(albumData);
		const songsResponse = await fetch(`/album/${props.match.params.id}/songs`);
		const songsData = await songsResponse.json();
		setSongs(songsData);
	}

	console.log(album);
	return (
		<main>
			<PlaylistHeader
				data={album}
				type="album"
				songs={songs}
				artist={{ name: album.artistName, image: album.artistImage }}
			/>

			<SongsList>
				{songs.map(song => (
					<Link to={`/song/${song.id}?album=${album.id}`} key={song.id}>
						<SongInList song={song} index={song.track_number} type="album" />
					</Link>
				))}
			</SongsList>
		</main>
	);
}

export default Album;
