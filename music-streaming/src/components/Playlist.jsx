import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SongInList from "./SongInList";
import PlaylistHeader from "./PlaylistHeader";
import { urlChangeEvent } from "../AnalyticsManager";

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
		urlChangeEvent();
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

	return (
		<main>
			<PlaylistHeader data={playlist} type="playlist" songs={songs} />

			<SongsList>
				{songs.map((song, i) => {
					return (
						<Link to={`/song/${song.id}?playlist=${playlist.id}`}>
							<SongInList
								key={song.id}
								song={song}
								index={i + 1}
								type="playlist"
							/>
						</Link>
					);
				})}
			</SongsList>
		</main>
	);
}

export default Playlist;
