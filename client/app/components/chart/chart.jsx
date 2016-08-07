import _ from 'lodash';
import React, { Component } from 'react';
import { 
	Sparklines, 
	SparklinesLine,
	SparklinesReferenceLine,
} from 'react-sparklines';


class Chart extends Component {

	render() {
		const color = this.props.color;
		const data = this.props.data;
		const units = this.props.units;
		
		return (
			<div>
				<Sparklines data={data} width={180} height={100} margin={5}>
					<SparklinesLine color={color} style={{fill: color}}/>
					<SparklinesReferenceLine type='avg'/>
				</Sparklines>
				<div>Среднее значение: {average(data).toFixed(1)} ({units})</div>
			</div>
		);
	}
}

function average(data) {
	return (_.sum(data) / data.length);
}

export default Chart;