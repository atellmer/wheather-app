import React, {Component} from 'react';

import style from './search-bar';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	inputChangeHandler(event) {
		this.setState({
			term: event.target.value
		});
	}

	formSubmitHandler(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({
			term: ''
		});
	}

	render() {
		return (
			<div className="col s12 m12">
				<form 
					className="input-field"
					onSubmit={::this.formSubmitHandler}
				>
					<div className="row">
						<div className="col s12 m10">
							<input 
								type="text" 
								placeholder="Search weather for a city"
								value={this.state.term}
								onChange={::this.inputChangeHandler}
							/>
						</div>
						<div className="col s12 m2">
							<div className={style.btn}>
								<button 
									type="submit" 
									class="waves-effect waves-light btn"
								>
									Search
								</button>
							</div>
						</div>
					</div>
				</form>		
			</div>
		);
	}
}

export default SearchBar;