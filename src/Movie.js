import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => (
	<div>
		<h3>{movie.title}</h3>
	</div>
);

export default Movie;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}).isRequired, // Each prop should either be required or have a default value.
}; // propType for every single prop that is used.
