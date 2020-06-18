import React, { Component } from 'react';
import Cart from './Cart';
import Total from './Total';

export default class CartSummary extends Component {
	render() {
		
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
			const featureHash = feature + '-' + idx;
			const selectedOption = this.props.selected[feature];

			return (
				<Cart
					featureHash={featureHash}
					feature={feature}
					selectedOption={selectedOption}
					USCurrencyFormat={this.props.USCurrencyFormat}
				/>
			);
		});

		return (
			<section className="main__summary">
				<h2>Your cart</h2>
				{summary}
				<Total selected={this.props.selected} USCurrencyFormat={this.props.USCurrencyFormat}/>

			</section>
		);
	}
}