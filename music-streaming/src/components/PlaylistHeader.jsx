import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";

const PlaylistImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 4px;
	object-fit: cover;
`;
const ArtistImage = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	object-fit: cover;
`;

const Header = styled.header`
	background-color: #1d1d1d;
	height: 270px;
	display: flex;
	align-items: center;
	padding: 0 10%;
	color: #aaaaaa;
`;

const PlayBtn = styled.button`
	border: none;
	outline: none;
	width: 100px;
	height: 36px;
	margin-top: auto;
	background-color: #fff;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function PlaylistHeader({ artist, data, songs, type }) {
	console.log(data);
	console.log(songs);
	console.log(type);
	function timeToString(time) {
		const date = new Date(Date.parse(time));
		return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
	}

	return (
		data && (
			<Header>
				<PlaylistImage src={data.coverImg} alt="playlist image" />
				<div
					style={{
						paddingLeft: "36px",
						height: "200px",
						display: "flex",
						flexDirection: "column"
					}}>
					<h2 style={{ color: "#fff", margin: "0" }}>{data.name}</h2>
					{type === "playlist" ? (
						<span>Created at: {timeToString(data.createdAt)}</span>
					) : (
						<>
							<ArtistImage src={data.Artist?.coverImg} />
							<span>{data.Artist?.name}</span>
						</>
					)}
					<span>{songs?.length} songs</span>
					<PlayBtn>
						{songs && (
							<Link to={`/song/${songs[0] && songs[0].id}?playlist=${data.id}`}>
								<FaPlay style={{ paddingRight: "6px" }} />
								Play
							</Link>
						)}
					</PlayBtn>
				</div>
			</Header>
		)
	);
}

export default PlaylistHeader;
