import React from "react";
import { Link } from "react-router-dom";

function AlbumCard(props) {
	return (
		<li className="cardBackground" key={props.data.id}>
			<Link to={`/album/${props.data.id}`}>
				<img
					className="cardImage-rect"
					src={props.data.cover_img}
					alt="album image"
				/>
				<h4 className="cardTitle-rect">{props.data.name}</h4>
				<span className="cardSub-rect">{props.data.artistName}</span>
			</Link>
		</li>
	);
}

export default AlbumCard;
