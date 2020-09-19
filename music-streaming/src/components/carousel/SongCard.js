import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.li`
	width: 150px;
	background-color: blanchedalmond;
	padding: 16px;
	border-radius: 10px;
	text-align: center;
`;

const ArtistsSongImage = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 5px;
	object-fit: cover;
`;

function SongCard(props) {
	const [artist, setArtist] = useState({});

	//   async function fetchArtist() {
	//     const artistResult = await fetch(`artist/${props.data.artist_id}`);
	//     const artistObj = await artistResult.json();
	//     setArtist(artistObj);
	//   }
	//   useEffect(() => fetchArtist(), []);

	useEffect(() => {
		(async () => {
			const artistResult = await fetch(`artist/${props.data.artist_id}`);
			const artistObj = await artistResult.json();
			setArtist(artistObj);
		})();
	}, []);

	return (
		<StyledCard key={props.data.id}>
			<ArtistsSongImage
				src={artist.cover_img}
				className="carousel-img"
				alt="artist image"
			/>
			<Link to={`/song/${props.data.id}`}>
				<h4 className="card-title">{props.data.title}</h4>
				<span className="song-artist">{artist.name}</span>
			</Link>
		</StyledCard>
	);
}

export default SongCard;
