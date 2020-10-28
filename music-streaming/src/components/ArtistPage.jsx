import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";
import Carousel from "./carousel/Carousel";
import { urlChangeEvent } from "../AnalyticsManager";

const SongsList = styled.ul`
	padding: 0;
	margin: 0 auto;
	background-color: #000;
	width: 80%;
`;
const Header = styled.header`
	/* background-color: #1d1d1d; */
	height: 400px;
	display: flex;
	align-items: flex-end;
	padding: 0 5%;
	color: #aaaaaa;
	width: 100%;
	object-fit: cover;
	background-color: #aaaaaa;
	background-position: center;
	background-repeat: no-repeat; /* Do not repeat the image */
	background-size: cover;
`;

const ArtistName = styled.h1`
	color: #fff;
	font-size: 6em;
	text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
	margin: 36px 0;
`;

function Artist(props) {
	const [songs, setSongs] = useState([]);
	const [artist, setArtist] = useState({});
	const [albums, setAlbums] = useState([]);

	useEffect(() => {
		fetchData();
		urlChangeEvent();
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
			<Header
				style={
					artist.cover_img
						? {
								backgroundImage: `url(${artist.cover_img})`
						  }
						: {}
				}>
				<ArtistName>{artist.name}</ArtistName>
			</Header>
			<div style={{ paddingLeft: "36px" }}>
				<h2 style={{ color: "white" }}>top songs</h2>
				<SongsList>
					{songs.slice(0, 5).map((song, i) => (
						<Link to={`/song/${song.id}?artist=${artist.id}`} key={song.id}>
							<SongInList song={song} index={i + 1} type="artist" />
						</Link>
					))}
				</SongsList>
				<h2 style={{ color: "white" }}>albums</h2>
				<Carousel data={albums} type="albums" />
			</div>
		</main>
	);
}

export default Artist;
