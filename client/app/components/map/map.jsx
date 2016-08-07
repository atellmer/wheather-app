import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';


class Map extends Component {
	render() {
		const lat = this.props.lat;
		const lng = this.props.lng;

		return (
			<GoogleMapLoader
				query={ {libraries: 'geometry,drawing,places,visualization' } }
				containerElement={
					<div style={ {height: '100%'} }/>
				}
				googleMapElement={
					<GoogleMap
						defaultZoom={ 10 }
						defaultCenter={{ lat: lat, lng: lng }}>
					</GoogleMap>
				}
			/>
		);
	}
}

export default Map;