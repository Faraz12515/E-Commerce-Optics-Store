import React, { Component, useState } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import './Login.css';
import { NavLink, Link } from 'react-router-dom';
import Facebook from './components/Facebook';
import GoogleLogin from 'react-google-login';
import { Footer } from './Footer';

// const [name, setName] = useState();

// const [email, setEmail] = useState();

// const [url, setUrl] = useState();

export class Login extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		name: '',
	// 		email: '',
	// 		url: ''
	// 	};
	// }

	render() {
		// const responseGoogle = response => {
		// 	debugger;
		// 	const Name = response.profileObj.name;
		// 	const Email = response.profileObj.email;
		// 	const Url = response.profileObj.imageUrl;
		// 	this.setState({ name: Name });
		// 	this.setState({ email: Email });
		// 	this.setState({ imageUrl: Url });
		// 	// setName();
		// 	// setEmail(response.profileObj.email);
		// 	// setUrl(response.profileObj.imageUrl);
		// 	console.log(response);
		// };

		return (
			<div>
				<div
					className='row'
					style={{
						marginLeft: '27%',
						marginRight: '14%',
						marginTop: '15%'
					}}
				>
					<div className='col-md-5'>
						<Card style={{ width: '18rem' }}>
							<Card.Header>
								<Card.Title className='text-center'>Facebook Login</Card.Title>
							</Card.Header>
							<Card.Body>
								<Button variant='primary'>
									<Link
										style={{
											textDecoration: 'none',
											color: 'white',
											width: '245px'
										}}
										to='/facebooklogin'
									>
										<i class='fab fa-facebook-f'></i> Login with Facebook
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</div>
					<div className='col-md-5'>
						<Card style={{ width: '18rem' }}>
							<Card.Header>
								<Card.Title className='text-center'>Google Login</Card.Title>
							</Card.Header>
							<Card.Body>
								<Button variant='danger'>
									<Link
										style={{
											textDecoration: 'none',
											color: 'white',
											width: '245px'
										}}
										to='/googleuserlogin'
									>
										<i class='fab fa-google-plus-g'></i> Login with Google
									</Link>
								</Button>
							</Card.Body>
						</Card>
					</div>
				</div>

				{/* <div style={{ marginTop: '50px' }}>
					<Card className='text-center'>
						<Card.Header className='text-muted'></Card.Header>
						<Card.Body>
							<Card.Title>
								<h2>Facebook Authetication</h2>
							</Card.Title>
							<Card.Text>To get started, authenticate with Facebook.</Card.Text>
							<Facebook />
						</Card.Body>
						<Card.Footer className='text-muted'></Card.Footer>
					</Card>
				</div> */}
				{/* <div style={{ marginTop: '15px' }}>
					<Card className='text-center'>
						<Card.Header className='text-muted'></Card.Header>
						<Card.Body>
							<Card.Title>
								<h2>Google Authetication</h2>
							</Card.Title>
							<Card.Text>To get started, authenticate with Google.</Card.Text>

							<div>
								<h2>Welcome {this.state.name}</h2>
								<img src={this.state.imageUrl} />
							</div>

							<br />
							<GoogleLogin
								clientId='308052452203-nnqrnbqb62kis8tn8b871qrvfqho64uu.apps.googleusercontent.com'
								buttonText='Login'
								onSuccess={responseGoogle}
								onFailure={responseGoogle}
								cookiePolicy={'single_host_origin'}
							/>
						</Card.Body>
						<Card.Footer className='text-muted'></Card.Footer>
					</Card>
				</div> */}
			</div>
		);
	}
}

export default Login;
