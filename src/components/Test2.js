import React, { Component, PropTypes } from "react";

import Image from "./Image";

class Test2 extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			fetched: null
		};
	}

	componentDidMount() {
		fetch(
			"https://maps.googleapis.com/maps/api/geocode/json?address=Oxford%20University,%20uk&sensor=false",
			{
				method: "GET"
			}
		).then(response => response.results);
	}

	render() {
		const style = {
			border: "1px solid black",
			padding: "10px"
		};
		return <div style={style}>This is another Test </div>;
	}
}

export default Test2;
