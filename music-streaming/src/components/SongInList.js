import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SongRow = styled.li`
	display: flex;
	align-items: center;
	height: 48px;
	border-bottom: 2px solid #1a1a1a;
	padding: 0 8px;
	color: #aaa;
`;

function SongInList(props) {
	const [artist, setArtist] = useState({});

	useEffect(() => {
		(async () => {
			const artistResult = await fetch(`/artist/${props.song.artist_id}`);
			const artistObj = await artistResult.json();
			setArtist(artistObj);
		})();
	}, []);

	function durationToString(duration) {
		const minutes = Math.floor(props.song.duration / 60);
		const seconds = props.song.duration % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	}

	return (
		<SongRow>
			<span
				style={{
					width: "200px",
					color: "#ffffff"
				}}>
				{props.song.title}
			</span>
			<span>{artist.name}</span>
			<span
				style={{
					marginLeft: "auto"
				}}>
				{durationToString(props.song.duration)}
			</span>
		</SongRow>
	);
}

export default SongInList;
