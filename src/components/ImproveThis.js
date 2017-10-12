import React, { Component, PropTypes } from "react";

import Image from "./Image";
import { Menu, MenuItem, MenuDivider } from "@blueprintjs/core";

class ImproveThis extends Component {
	static propTypes = {};

	constructor(props) {
		super(props);
		this.state = {
			fullname: this.props.first_name + ' ' + this.props.last_name
		};
	}
	
	componentDidMount() {}

	componentWillReceiveProps(nextProps) {}

	render() {
		return (
			<div>
			   <span>
				  { this.state.fullname }
			   </span>
			</div>
		);
	}
}

export default ImproveThis;
