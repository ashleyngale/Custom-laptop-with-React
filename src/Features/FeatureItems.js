import React, { Component } from 'react';
import Options from 'Option.js'

export default class FeatureItems extends Component {
	render() {
		return (
			<fieldset className="feature" key={this.props.featureHash}>
				<legend className="feature__name">
					<h3>{this.props.feature}</h3>
				</legend>
				<Options options={this.props.options}/>
			</fieldset>
		);
	}
}
