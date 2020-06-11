import React, { Component } from 'react';


export default class Total extends Component {
    render(props){
        console.log(this.props.selected)
        const total = (Object.values(this.props.selected)).reduce(
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