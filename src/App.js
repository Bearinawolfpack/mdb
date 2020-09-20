/* eslint-disable-line/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie';

class App extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
			);
			const movies = await res.json();
			this.setState({
				movies: movies.results,
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				{this.state.movies.map((movie) => (
					<Movie movie={movie} key={movie.id} />
				))}
			</div>
		);
	}
}

export default App;
