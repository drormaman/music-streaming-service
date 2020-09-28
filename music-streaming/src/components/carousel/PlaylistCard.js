import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function PlaylistCard(props) {
	return (
		<li className="cardBackground-circle" key={props.data.id}>
			<Link to={`/playlist/${props.data.id}`}>
				<img
					className="cardImage-circle"
					src={props.data.coverImg}
					alt="artist image"
				/>
				<h4 className="cardTitle-circle">{props.data.name}</h4>
			</Link>
		</li>
	);
}

export default PlaylistCard;
