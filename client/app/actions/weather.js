import axios from 'axios';

import * as types from '../constants/ActionTypes';
import * as constants from '../constants/OtherConstants';

export function fetchWeather(city) {
	const url = `${constants.ROOT_URL}&q=${city}`;
	const request = axios.get(url);

	return {
		type: types.FETCH_WEATHER,
		payload: request
	};
}
