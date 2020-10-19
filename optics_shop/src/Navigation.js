import React, { Component } from 'react';
import './App.css';
import { term } from './Home';
import { NavLink, Link } from 'react-router-dom';
import {
	Navbar,
	Nav,
	Form,
	FormControl,
	Button,
	NavDropdown,
	NavbarBrand
} from 'react-bootstrap';

export class Navigation extends Component {
	render() {
		return (
			<Navbar
				style={{ opacity: '0.9' }}
				id='navbar'
				bg='dark'
				variant='dark'
				expand='lg'
				fixed='top'
			>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<div>
							<img
								src='images/Faraz Logo 4.png'
								style={{ width: 'auto', height: '50px' }}
							/>
						</div>
						<NavbarBrand
							style={{
								textDecoration: 'none',
								fontSize: '22px',
								fontWeight: '800',
								marginBottom: '-2px'
							}}
							className='navlink d-inline p-2 bg-dark text-danger'
							to='/'
						>
							OPTICS STORE
						</NavbarBrand>

						<NavLink
							style={{
								textDecoration: 'none',
								fontSize: '20px'
								// marginTop: '-3px'
							}}
							className='navlink d-inline p-2 bg-dark text-white'
							to='/'
						>
							HOME
						</NavLink>
						{/* 
						<NavLink
							style={{
								textDecoration: 'none',
								fontSize: '20px'
								// marginTop: '-3px'
							}}
							className='navlink d-inline p-2 bg-dark text-white'
							to='/cart'
						>
							CART
						</NavLink> */}

						<div className='dropdown'>
							<button className='dropbtn'>EYEGLASSES</button>
							<div class='dropdown-content'>
								<Link
									style={{
										textDecoration: 'none',
										borderBottom: '2px solid black'
									}}
									to='/eyeglasses'
								>
									EYEGLASSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/meneyeglasses'>
									MEN EYEGLASSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/womeneyeglasses'>
									WOMEN EYEGLASSES
								</Link>
							</div>
						</div>

						<div className='dropdown'>
							<button className='dropbtn'>SUNGLASSES</button>
							<div className='dropdown-content'>
								<Link
									style={{
										textDecoration: 'none',
										borderBottom: '2px solid black'
									}}
									to='/sunglasses'
								>
									SUNGLASSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/mensunglasses'>
									MEN SUNGLASSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/womensunglasses'>
									WOMEN SUNGLASSES
								</Link>
							</div>
						</div>

						<div class='dropdown'>
							<button class='dropbtn'>PREMIUM</button>
							<div class='dropdown-content'>
								<Link
									style={{
										textDecoration: 'none',
										borderBottom: '2px solid black'
									}}
									to='/premium'
								>
									PREMIUM
								</Link>
								<Link
									style={{ textDecoration: 'none' }}
									to='/premiummeneyeglasses'
								>
									PREMIUM MEN EYEGLASSES
								</Link>
								<Link
									style={{ textDecoration: 'none' }}
									to='/premiumwomeneyeglasses'
								>
									PREMIUM WOMEN EYEGLASSES
								</Link>
							</div>
						</div>

						<div class='dropdown'>
							<button class='dropbtn'>CONTACT LENSES</button>
							<div class='dropdown-content'>
								<Link
									style={{
										textDecoration: 'none',
										borderBottom: '2px solid black'
									}}
									to='/contactlenses'
								>
									CONTACT LENSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/transitionlenses'>
									TRANSITION LENSES
								</Link>
								<Link style={{ textDecoration: 'none' }} to='/bifocallenses'>
									BIFOCAL LENSES
								</Link>
								<Link
									style={{ textDecoration: 'none' }}
									to='/progressivelenses'
								>
									PROGRESSIVE LENSES
								</Link>
							</div>
						</div>

						<div class='dropdown'>
							<button class='dropbtn'>VENDORS</button>
							<div class='dropdown-content'>
								<Link
									style={{
										textDecoration: 'none'
									}}
									to='/gabaoptical'
								>
									GABA OPTICAL
								</Link>
								<Link
									style={{
										textDecoration: 'none'
									}}
									to='/opticraft'
								>
									OPTICRAFT
								</Link>
								<Link
									style={{
										textDecoration: 'none'
									}}
									to='/optec'
								>
									OPTEC
								</Link>
								<Link
									style={{
										textDecoration: 'none'
									}}
									to='/visionexpress'
								>
									VISION EXPRESS
								</Link>
							</div>
						</div>

						<div style={{ marginLeft: '112px', marginTop: '4px' }}>
							<Link to='/googleuserlogin'>
								<button className='btn btn-danger btn-large '>
									<i class='fab fa-google-plus-g'></i> Google Login
								</button>
							</Link>
							<Link to='/facebooklogin'>
								<button className='btn btn-primary btn-large ml-3'>
									<i class='fab fa-facebook-f'></i> Facebook Login
								</button>
							</Link>
						</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
