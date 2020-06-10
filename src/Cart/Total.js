import React, { Component } from 'react';


export default class Total extends Component {
    render(props){
        return (
            <div className="summary__total__value">
                {this.props.USCurrencyFormat.format(total)}
            </div>
        );
    }
}