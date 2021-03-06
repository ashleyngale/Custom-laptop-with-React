import React, { Component } from 'react';
import FeatureItems from './FeatureItems';
import Options from './Option';
import slugify from 'slugify';

export default class FeatureList extends Component {
	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
			const featureHash = feature + '-' + idx;

			const options = this.props.features[feature].map(item => {
				const itemHash = slugify(JSON.stringify(item));
				return (
					<div key={itemHash} className="feature__item">
						<input
							type="radio"
							id={itemHash}
							className="feature__option"
							name={slugify(feature)}
							checked={item.name === this.props.selected[feature].name}
							onChange={e => this.props.updateFeature(feature, item)}
						/>
						<label htmlFor={itemHash} className="feature__label">
							{item.name} ({this.props.USCurrencyFormat.format(item.cost)})
						</label>
					</div>
				);
            });
            
            return(
				<div>
					<FeatureItems
						featureHash={featureHash}
						feature={feature}
						features={features}
						options={options}
						USCurrencyFormat={this.props.USCurrencyFormat}
					/>
					<Options
					options={this.props.options}
					/>
				</div>
            );
        });
        return (
			<form className="main__form">
				<h2>Customize your laptop</h2>
				{features}
			</form>
		);
        
    }

}