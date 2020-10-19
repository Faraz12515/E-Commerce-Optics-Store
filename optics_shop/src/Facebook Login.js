import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';
import { NavLink, Link } from 'react-router-dom';

export class Facebook_Login extends Component {
	render() {
		return (
			<div className='text-center bg-dark'>
				<div style={{ marginTop: '66px', padding: '10px', color: 'white' }}>
					<h2>
						<b style={{ color: '#4d6aba' }}>Facebook</b> Authetication
					</h2>
					<p>To get started, authenticate with Facebook.</p>

					<br />

					<div style={{ marginBottom: '10px' }}>
						<Facebook />
					</div>

					<Link to='/' type='button' className='btn btn-danger back mb-3'>
						<i className='fas fa-arrow-left'></i> Continue Shopping
					</Link>
				</div>
			</div>
		);
	}
}

export default Facebook_Login;
