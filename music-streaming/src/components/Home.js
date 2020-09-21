import React, { useState, useEffect } from "react";
import Carousel from "./carousel/Carousel";
import styled from "styled-components";

const Title = styled.h2`
	color: white;
	margin: 12px 0 12px 36px;
`;

function Home() {
	const [songs, setSongs] = useState([]);
	const [artists, setArtists] = useState([]);
	const [albums, setAlbums] = useState([]);
	const [playlists, setPlaylists] = useState([]);

	useEffect(() => {
		fetchSongs();
		fetchArtists();
		fetchAlbums();
		fetchPlaylists();
	}, []);

	async function fetchSongs() {
		const data = await fetch("/top_songs");
		const songsArr = await data.json();
		setSongs(songsArr);
	}

	async function fetchArtists() {
		const data = await fetch("/top_artists");
		const artistsArr = await data.json();
		setArtists(artistsArr);
	}

	async function fetchAlbums() {
		const data = await fetch("/top_albums");
		const albumsArr = await data.json();
		setAlbums(albumsArr);
	}

	async function fetchPlaylists() {
		const data = await fetch("/top_playlists");
		const playlistsArr = await data.json();
		setPlaylists(playlistsArr);
	}
	return (
		<main>
			<Title>Top Songs</Title>
			<Carousel data={songs} type="songs" />
			<Title>Top Artists</Title>
			<Carousel data={artists} type="artists" />
			<Title>Top Albums</Title>
			<Carousel data={albums} type="albums" />
			<Title>Top playlists</Title>
			<Carousel data={playlists} type="playlists" />
		</main>
	);
}

export default Home;
