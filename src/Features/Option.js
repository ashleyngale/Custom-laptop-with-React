import React, { Component } from 'react';

export default class Option extends Component {
	render() {
		return ( 
            <div>
            {this.props.options}
            </div>
        )
    }
}