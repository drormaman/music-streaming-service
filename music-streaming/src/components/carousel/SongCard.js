import React from "react";
import { Link } from "react-router-dom";

function SongCard(props) {
	return (
		<li className="cardBackground-rect" key={props.data.id}>
			<Link to={`/song/${props.data.id}?album=${props.data.albumId}`}>
				<img
					className="cardImage-rect"
					src={props.data.Artist.coverImg}
					alt="artist image"
				/>
				<h4 className="cardTitle-rect">{props.data.title}</h4>
				<span className="cardSub-rect">{props.data.Artist.name}</span>
			</Link>
		</li>
	);
}

export default SongCard;
