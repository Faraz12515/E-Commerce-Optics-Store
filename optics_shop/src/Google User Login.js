import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import { NavLink, Link } from 'react-router-dom';

export class Google_User_Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			url: ''
		};
	}

	render() {
		const responseGoogle = response => {
			const Name = response.profileObj.name;
			const Email = response.profileObj.email;
			const Url = response.profileObj.imageUrl;
			this.setState({ name: Name });
			this.setState({ email: Email });
			this.setState({ imageUrl: Url });
			// setName();
			// setEmail(response.profileObj.email);
			// setUrl(response.profileObj.imageUrl);
			console.log(response);
		};

		return (
			<div>
				<div className='text-center bg-dark'>
					<div style={{ marginTop: '66px', padding: '10px', color: 'white' }}>
						<h1>
							<b style={{ color: '#e04958' }}>Google</b> Authetication
						</h1>
						<p>To get started, authenticate with Google.</p>
					</div>

					<div style={{ color: 'white' }}>
						<h2>Welcome {this.state.name}</h2>
						<img className='rounded-circle' src={this.state.imageUrl} />

						<br />
						<br />
						<GoogleLogin
							clientId='308052452203-nnqrnbqb62kis8tn8b871qrvfqho64uu.apps.googleusercontent.com'
							buttonText='Sign in with Google'
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={'single_host_origin'}
						/>
						<br />

						<Link to='/' type='button' className='btn btn-danger back mb-3'>
							<i className='fas fa-arrow-left'></i> Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Google_User_Login;
