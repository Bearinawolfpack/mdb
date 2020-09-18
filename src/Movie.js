import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}), // Each prop should either be required or have a default value.
		desc: PropTypes.string,
	}; // propType for every single prop that is used.

	static defaultProps = {
		desc: 'Description not available'
	}; // Cannot set default prop on nested property (i.e. title is nested under movie.)

	render() {
		return (
			<div>
				<h3>{this.props.movie.title}</h3>
				<p>{this.props.desc}</p>
			</div>
		);
	}
}

export default Movie;
