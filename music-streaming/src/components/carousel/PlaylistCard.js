import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledCard = styled.li`
	width: 150px;
	padding: 16px;
	border-radius: 10px;
	text-align: center;
	margin-left: 16px;
`;

const PlaylistImg = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
`;

function PlaylistCard(props) {
	return (
		<StyledCard key={props.data.id}>
			<Link to={`/playlist/${props.data.id}`}>
				<PlaylistImg src={props.data.cover_img} alt="artist image" />
				<h4 className="card-title">{props.data.name}</h4>
			</Link>
		</StyledCard>
	);
}

export default PlaylistCard;
