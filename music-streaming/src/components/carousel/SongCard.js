import React from "react";
import { Link } from "react-router-dom";

function SongCard(props) {
	return (
		<li className="cardBackground" key={props.data.id}>
			<Link to={`/song/${props.data.id}?album=${props.data.album_id}`}>
				<img
					className="cardImage-rect"
					src={props.data.artistImage}
					alt="artist image"
				/>
				<h4 className="cardTitle-rect">{props.data.title}</h4>
				<span className="cardSub-rect">{props.data.artistName}</span>
			</Link>
		</li>
	);
}

export default SongCard;
