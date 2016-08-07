import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SearchBar from '../components/search-bar/';
import * as weatherActions from '../actions/weather';

class SearchBarContainer extends Component {
	render() {	
		const { fetchWeather } = this.props.weatherActions;
		return (
			<SearchBar fetchWeather={fetchWeather}/>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		weatherActions: bindActionCreators(weatherActions, dispatch)
	}
}

export default connect(null, mapDispatchToProps)(SearchBarContainer);