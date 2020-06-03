import React, { Component } from 'react'
import CustomItems from './CustomItems'

class CustomizeItems extends Component{
    render(props) {
        return (
            <div>
            {Object.keys(this.props.features).map((feature, index) => 
                <CustomItems featureHash={feature + '-' + index} 
                      selected={this.props.selected} 
                      currency={this.props.currency} key={index} 
                      featureName={feature} 
                      features={this.props.features[feature]} 
                      select={this.props.select}/>)}
            </div>
        )
    }
}

export default CustomizeItems;