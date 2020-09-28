import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Album from "./components/Album";
import Song from "./components/Song";
import Artist from "./components/ArtistPage";
import Page404 from "./components/Page404";
import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";

const Navbar = styled.nav`
	background-color: #333333;
	height: 40px;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
	padding-left: 36px;
`;
const HomeLink = styled.span`
	color: white;
	line-height: 40px;
	font-weight: 500;
`;

function App() {
	return (
		<div id="app">
			<BrowserRouter>
				<Navbar>
					<Link to="/">
						<HomeLink>
							<BsMusicNoteBeamed />
							{"  "} Home
						</HomeLink>
					</Link>
				</Navbar>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/playlist/:id" component={Playlist} />
					<Route path="/album/:id" component={Album} />
					<Route path="/artist/:id" component={Artist} />
					<Route path="/song/:id" component={Song} />
					<Route path="*" component={Page404} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
