import React, { Component } from 'react';
import USCurrencyFormat from 'App';

export default class Total extends Component {
    render(props){
        console.log(this.props.selected)
        const total = (Object.values(this.props.USCurrencyFormat)).reduce(
            (acc, curr) => acc + curr.cost,
            0
        );
        return (
            <div>
            <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
            </div>
            </div>
        );
    }
}

