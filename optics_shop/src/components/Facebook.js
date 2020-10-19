import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

// import Stripe_TOM_FORD_711 from '../Stripe Products/Stripe_TOM_FORD_711';

export default class Facebook extends Component {
	state = {
		isLoggedIn: false,
		userID: '',
		name: '',
		email: '',
		picture: ''
	};

	responseFacebook = response => {
		console.log(response);
		this.setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url
		});
	};

	componentClicked = () => console.log('clicked');

	render() {
		let fbContent;

		if (this.state.isLoggedIn) {
			fbContent = (
				<div>
					<div>
						<h2 style={{ color: 'white' }}>Welcome {this.state.name}</h2>
						<img
							className='rounded-circle '
							src={this.state.picture}
							alt={this.state.name}
						/>
					</div>

					{/* <Stripe_TOM_FORD_711 /> */}
				</div>
			);
		} else {
			fbContent = (
				<FacebookLogin
					appId='173704100661552'
					fields='name,email,picture'
					onClick={this.componentClicked}
					callback={this.responseFacebook}
				/>
			);
		}
		return <div>{fbContent}</div>;
	}
}
