import * as types from '../constants/ActionTypes';

const initialState = {
	fetchWeather: []
};

export default function weather(state = initialState, action) {
	switch (action.type) {
		case types.FETCH_WEATHER:
			return {
				...state,
				fetchWeather: state.fetchWeather.concat(action.payload.data),
			};

		default:
			return state;
	}
}