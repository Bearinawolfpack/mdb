/* eslint-disable-line/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Movie from './Movie';

class MoviesList extends PureComponent {
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
			<MovieGrid className="App">
				{this.state.movies.map((movie) => (
					<Movie movie={movie} key={movie.id} />
				))}
			</MovieGrid>
		);
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
