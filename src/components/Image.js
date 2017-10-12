import React, { Component, PropTypes } from "react";

class Image extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<img src={this.props.source} alt="" />
			</div>
		);
	}
}

export default Image
