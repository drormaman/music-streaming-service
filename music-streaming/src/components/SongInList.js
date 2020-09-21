import React from "react";
import styled from "styled-components";

const SongRow = styled.li`
	display: flex;
	align-items: center;
	height: ${props => (props.small ? "36px" : "48px")};
	border-bottom: 2px solid #1a1a1a;
	padding: 0 8px;
	color: #aaa;
	font-size: ${props => (props.small ? "12px" : "16px")};
	background-color: ${props => (props.playing ? "#1a1a1a" : "#000")};
`;

function SongInList(props) {
	function durationToString() {
		const minutes = Math.floor(props.song.duration / 60);
		const seconds = props.song.duration % 60;
		return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
	}

	return (
		<SongRow
			small={props.type === "small" ? true : false}
			playing={props.isPlaying ? true : false}>
			<span style={{ width: "30px" }}>{props.index}</span>
			<span
				style={{
					width: props.type === "small" ? "120px" : "200px",
					color: "#ffffff"
				}}>
				{props.song.title}
			</span>
			<span>{props.song.artistName}</span>
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
