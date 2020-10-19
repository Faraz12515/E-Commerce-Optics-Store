import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

export default class Facebook_User_Login extends Component {
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
					<div
						style={{
							width: '100%',
							marginTop: '500px',
							background: '#282c35',
							padding: '20px'
						}}
					>
						<img src={this.state.picture} alt={this.state.name} />
						<h2 style={{ color: 'white' }}>Welcome {this.state.name}</h2>
					</div>
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
