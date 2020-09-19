import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Song from "./components/Song";

function App() {
	return (
		<div>
			<h1>navbar</h1>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/playlist/:id" component={Playlist} />
					<Route path="/song/:id" component={Song} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
