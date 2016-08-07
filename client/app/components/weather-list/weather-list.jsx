import React, { Component } from 'react';

import Chart from '../chart';
import Map from '../map';

import style from './weather-list.styl';


class WeatherList extends Component {

	constructor(props) {
		super(props);
		this.index = 0;
	}
	renderWeather(item) {	
		const city = item.city;
		const temps = item.list.map(item => item.temp.day);
		const pressure = item.list.map(item => item.pressure);
		const humidity = item.list.map(item => item.humidity);
		const { lat, lon } = city.coord;

		this.index++;

		return (
			<tr key={this.index}>
				<td>
					<Map lat={lat} lng={lon}/>
				</td>
				<td>
					<Chart data={temps} units='C' color='green'/>
				</td>
				<td>
					<Chart data={pressure} units='мм рт. ст.' color='red'/>
				</td>
				<td>
					<Chart data={humidity} units='%' color='blue'/>
				</td>
			</tr>
		);
	}

	render() {
		const weather = this.props.weather;
		console.log('weather: ', weather);

		return (
			<div className="row">
				<div className="col s12 m12">
					<table className="highlight bordered striped centered">
						<thead>
							<tr>
								<th>Город</th>
								<th>Изменение температур за 16 дней (C)</th>
								<th>Изменение давления за 16 дней (мм рт. ст.)</th>
								<th>Изменение влажности за 16 дней (%)</th>
							</tr>
						</thead>

						<tbody>
							{weather.map(item => this.renderWeather(item))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default WeatherList;