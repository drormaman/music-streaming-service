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

function Album({ history, location, match }) {
	const [album, setAlbum] = useState({});
	useEffect(() => fetchData(), []);

	async function fetchData() {
		const albumResponse = await fetch(`/api/album/${match.params.id}/songs`);
		const albumData = await albumResponse.json();
		console.log(albumData);
		setAlbum(albumData);
	}

	return (
		<main>
			<PlaylistHeader
				data={album}
				type="album"
				songs={album.Songs}
				artist={{ name: album.artistName, image: album.artistImage }}
			/>

			<SongsList>
				{album.Songs?.map(song => (
					<Link to={`/song/${song.id}?album=${album.id}`} key={song.id}>
						<SongInList song={song} index={song.track_number} type="album" />
					</Link>
				))}
			</SongsList>
		</main>
	);
}

export default Album;
