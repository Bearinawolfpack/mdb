/* eslint-disable-line/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

class MoviesDetail extends Component {
	state = {
		movie: {},
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_TMDB}&language=en-US`,
			);
			const movie = await res.json();
			this.setState({
				movie,
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
    const { movie } = this.state;
		return (
			<div className="App">
      <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
				<h1>{this.state.movie.title}</h1>
        <p>{this.state.movie.overview}</p>
        <h3>{this.state.movie.release_date}</h3>
			</div>
		);
	}
}

export default MoviesDetail;
