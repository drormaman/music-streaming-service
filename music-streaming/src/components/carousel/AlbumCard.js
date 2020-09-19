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

const AlbumImage = styled.img`
	width: 130px;
	height: 130px;
	border-radius: 5px;
	object-fit: cover;
`;

function AlbumCard(props) {
	const [artist, setArtist] = useState({});

	useEffect(() => {
		(async () => {
			const artistResult = await fetch(`artist/${props.data.artist_id}`);
			const artistObj = await artistResult.json();
			setArtist(artistObj);
		})();
	}, [props.data]);

	return (
		<StyledCard key={props.data.id}>
			<Link to={`/album/${props.data.id}`}>
				<AlbumImage
					src={props.data.cover_img}
					className="carousel-img"
					alt="album image"
				/>
				<h4 className="card-title">{props.data.name}</h4>
				<span className="song-artist">{artist.name}</span>
			</Link>
		</StyledCard>
	);
}

export default AlbumCard;
