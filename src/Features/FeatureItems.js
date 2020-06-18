import React, { Component } from 'react';
import Option from 'Option.js'

export default class FeatureItems extends Component {
	render() {
		return (
			<fieldset className="feature" key={this.props.featureHash}>
				<legend className="feature__name">
					<h3>{this.props.feature}</h3>
				</legend>
				<Option/>
			</fieldset>
		);
	}
}
