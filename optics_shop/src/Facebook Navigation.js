import React, { Component } from 'react';
import './App.css';
import Facebook_User_Login from './Facebook User Login';

export class Facebook_Navigation extends Component {
	render() {
		return (
			<div>
				<div style={{ marginTop: '67px' }}>
					<h2>Facebook Authetication</h2>
					<p>To get started, authenticate with Facebook.</p>

					<div>
						<Facebook_User_Login />
					</div>
				</div>
			</div>
		);
	}
}

export default Facebook_Navigation;
