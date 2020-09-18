import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movie from "./Movie.js";

const movies = [
	{
		id: 1,
		title: "Star Wars",
	},
	{
		id: 2,
		title: "Spiderman",
	},
	{
		id: 3,
		title: "36th Chamber of Shaolin",
	},
	{
		id: 4,
		title: "5 Deadly Venoms",
	},
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				{movies.map((movie) => (
					<Movie movie={movie} key={movie.id} />
				))}
			</div>
		);
	}
}

export default App;
