import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";

const SongsList = styled.ul`
	padding: 0;
	margin: 0 auto;
	background-color: #000;
	width: 80%;
`;
const Header = styled.header`
	/* background-color: #1d1d1d; */
	height: 270px;
	display: flex;
	align-items: center;
	padding: 0 10%;
	color: #aaaaaa;
`;

function Artist(props) {
	const [album, setAlbum] = useState({});
	const [songs, setSongs] = useState([]);
	const [artist, setArtist] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const artistResponse = await fetch(`/artist/${props.match.params.id}`);
		const artistData = await artistResponse.json();
		setArtist(artistData);
		const songsResponse = await fetch(`/artist/${props.match.params.id}/songs`);
		const songsData = await songsResponse.json();
		setSongs(songsData);
		const albumsResponse = await fetch(
			`/artist/${props.match.params.id}/albums`
		);
		const albumsData = await albumsResponse.json();
		setAlbums(albumsData);
	}

	return (
		<main>
			<Header style={{ backgroundImage: `url(${artist.cover_img})` }}>
				<h2>{artist.name}</h2>
			</Header>

			<SongsList>
				{songs.slice(0, 5).map((song, i) => {
					return (
						<Link to={`/song/${song.id}?artist=${artist.id}`}>
							<SongInList
								key={song.id}
								song={song}
								index={i + 1}
								type="artist"
							/>
						</Link>
					);
				})}
			</SongsList>
		</main>
	);
}

export default Artist;
