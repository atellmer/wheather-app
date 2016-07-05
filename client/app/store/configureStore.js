import {
	createStore,
	applyMiddleware
} from 'redux';
import rootReducer from '../reducers/index';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

export default function configureStore(initialState) {
	const store = createStoreWithMiddleware(rootReducer, initialState);

	return store;
}