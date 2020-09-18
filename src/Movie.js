import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}), // Each prop should either be required or have a default value.
	}; // propType for every single prop that is used.

	render() {
		return (
			<div>
				<h3>{this.props.movie.title}</h3>
			</div>
		);
	}
}

export default Movie;
