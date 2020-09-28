import React from "react";
import { Link } from "react-router-dom";

function AlbumCard(props) {
	return (
		<li className="cardBackground-rect" key={props.data.id}>
			<Link to={`/album/${props.data.id}`}>
				<img
					className="cardImage-rect"
					src={props.data.coverImg}
					alt="album image"
				/>
				<h4 className="cardTitle-rect">{props.data.name}</h4>
				<span className="cardSub-rect">{props.data.Artist.name}</span>
			</Link>
		</li>
	);
}

export default AlbumCard;
