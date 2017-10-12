import React, { Component, PropTypes, createElement } from "react";
import { Switch, Route } from "react-router-dom";

import Test from "./Test";
import Test2 from "./Test2";
import Test3 from "./Test3";

import Sample from "./Sample";

class Layout extends Component {
	static propTypes = {};

	render() {
		return (
			<div>
				<Switch>
					<Route
						exact
						path="/test"
						render={({ location }) =>
							createElement(Test, {
								location
							})}
					/>

					<Route
						exact
						path="/test-2"
						render={({ location }) =>
							createElement(Test2, {
								location
							})}
					/>

					<Route
						exact
						path="/test-3"
						render={({ location }) =>
							createElement(Test3, {
								location
							})}
					/>

					<Route
						exact
						path="/sample"
						render={({ location }) =>
							createElement(Sample, {
								location
							})}
					/>
				</Switch>
			</div>
		);
	}
}

export default Layout;
