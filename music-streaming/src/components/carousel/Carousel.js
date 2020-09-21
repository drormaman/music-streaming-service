import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";
import AlbumCard from "./AlbumCard";
import PlaylistCard from "./PlaylistCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const styledUl = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	display: flex;
	list-style: none;
`;

const Button = styled.button`
	position: absolute;
	${props => (props.left ? "left: 20px;" : "right: 20px;")};
	top: 50%;
	z-index: 1;
	height: 36px;
	width: 36px;
	border-radius: 50%;
	border: none;
	outline: none;
	background-color: #fff;
	cursor: pointer;
	padding: 11px 0;

	&:hover {
		transform: scale(1.1);
	}
`;

function Carousel(props) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	const numberOfItemsInRow = Math.floor(windowWidth / 160);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		function handleResize() {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
	});

	function rightArrowClick() {
		setCurrentIndex(() =>
			currentIndex === props.data.length - numberOfItemsInRow
				? 0
				: currentIndex + 1
		);
	}
	function leftArrowClick() {
		setCurrentIndex(() =>
			currentIndex === 0
				? props.data.length - numberOfItemsInRow
				: currentIndex - 1
		);
	}

	return (
		<div style={{ position: "relative" }}>
			{currentIndex > 0 && (
				<Button left onClick={leftArrowClick}>
					<GrLinkPrevious />
				</Button>
			)}
			<TransitionGroup component={styledUl}>
				{props.data
					.slice(currentIndex, currentIndex + numberOfItemsInRow)
					.map(item => {
						let component;
						switch (props.type) {
							case "songs":
								component = <SongCard data={item} />;
								break;
							case "artists":
								component = <ArtistCard data={item} />;
								break;
							case "albums":
								component = <AlbumCard data={item} />;
								break;
							case "playlists":
								component = <PlaylistCard data={item} />;
								break;
						}
						return (
							<CSSTransition key={item.id} timeout={500} classNames="slide">
								{component}
							</CSSTransition>
						);
					})}
			</TransitionGroup>
			{currentIndex + numberOfItemsInRow < props.data.length && (
				<Button right onClick={rightArrowClick}>
					<GrLinkNext />
				</Button>
			)}
		</div>
	);
}
export default Carousel;
