import React, { useState, useEffect } from "react";
import styled from "styled-components";

const PlayerMainDiv = styled.main`
	height: 100vh;
	width: 100%;
	background-color: aqua;
	display: flex;
	flex-wrap: wrap;
`;

const RelatedList = styled.ul`
	border: 1px solid black;
	flex: 1;
	flex-basis: 300px;
	padding: 0;
	margin: 0;
	list-style: none;
`;

const NewDiv = styled.div`
	flex: 5;
	flex-basis: 600px;
`;

function Song(props) {
	const [song, setSong] = useState({});

	useEffect(() => fetchSong(), []);

	async function fetchSong() {
		const data = await fetch(`/song/${props.match.params.id}`);
		const songObj = await data.json();
		setSong(songObj);
	}
	return (
		<PlayerMainDiv>
			{/* <h1>{song.title}</h1> */}
			<NewDiv>
				<iframe
					style={{
						height: "100%",
						width: "100%"
					}}
					src={`https://www.youtube.com/embed/${song.youtube_link}?autoplay=1&controls=0&iv_load_policy=3`}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
				/>
			</NewDiv>
			<RelatedList>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
				<li>1fsdlkfjsalkjfl;asjfl;ks</li>
			</RelatedList>
		</PlayerMainDiv>
	);
}

export default Song;
