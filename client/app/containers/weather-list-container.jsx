import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherList from '../components/weather-list';

class WeatherListContainer extends Component {

	render() {
		const { weather } = this.props;
		return (
				<WeatherList weather={weather}/>
		);
	}
}

function mapStateToProps({ weather }) {

	return {
		weather: weather.fetchWeather
	}
}

export default connect(mapStateToProps)(WeatherListContainer);