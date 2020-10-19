import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class Google extends Component {
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
				<div>
					<div style={{ marginTop: '67px' }}>
						<h2>Google Authetication</h2>
						<p>To get started, authenticate with Google.</p>
					</div>

					<div>
						<h2>Welcome {this.state.name}</h2>
						<img src={this.state.imageUrl} />

						<br />
						<GoogleLogin
							clientId='308052452203-nnqrnbqb62kis8tn8b871qrvfqho64uu.apps.googleusercontent.com'
							buttonText='Login'
							onSuccess={responseGoogle}
							onFailure={responseGoogle}
							cookiePolicy={'single_host_origin'}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Google;
