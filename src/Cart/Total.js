import React, { Component } from 'react';


export default class Total extends Component {
    render(props){
        const total = Object.keys(this.props.selected).reduce(
			(acc, curr) => acc + this.props.selected[curr].cost,
			0
		);
        return (
            <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
            </div>
        );
    }
}