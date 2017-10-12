import React, { Component, PropTypes } from "react";

import Image from "./Image";

class Test extends Component {
	static propTypes = {};

	render() {
		const style = {
			border: "1px solid black",
			padding: "10px"
		};
		return (
			<div style={style}>
				This is a test{" "}
				<Image source="http://dev.refinepro.com/wp-content/uploads/2015/10/google-refine-128px.png" />
			</div>
		);
	}
}

export default Test;
