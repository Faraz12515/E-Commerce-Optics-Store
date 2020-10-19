import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<footer>
						<div class='footer' id='footer'>
							<div class='container'>
								<div class='row'>
									<div class='col-lg-3  col-md-3 col-sm-4 col-xs-6'>
										<h3>QUICK LINKS</h3>
										<ul>
											<li>
												<Link to='/eyeglasses'> Eyeglasses </Link>
											</li>
											<li>
												<Link to='/meneyeglasses'> Men Eyeglasses </Link>
											</li>
											<li>
												<Link to='/womeneyeglasses'> Women Eyeglasses </Link>
											</li>
											<li>
												<Link to='/sunglasses'> Sunglasses </Link>
											</li>
											<li>
												<Link to='/mensunglasses'> Men Sunglasses </Link>
											</li>
											<li>
												<Link to='/womensunglasses'> Women Sunglasses </Link>
											</li>
										</ul>
									</div>
									<div class='col-lg-3  col-md-3 col-sm-4 col-xs-6'>
										<h3></h3>
										<ul>
											<li>
												<Link to='/premium'> Premium </Link>
											</li>
											<li>
												<Link to='/premiummeneyeglasses'>
													{' '}
													Premium Men Eyeglasses{' '}
												</Link>
											</li>
											<li>
												<Link to='/premiumwomeneyeglasses'>
													{' '}
													Premium Women Eyeglasses{' '}
												</Link>
											</li>
											<li>
												<Link to='/contactlenses'> Contact Lenses </Link>
											</li>
											<li>
												<Link to='/transitionlenses'> Transition Lenses </Link>
											</li>
											<li>
												<Link to='/bifocallenses'> Bifocal Lenses </Link>
											</li>
											<li>
												<Link to='/progressivelenses'>
													{' '}
													Progressive Lenses{' '}
												</Link>
											</li>
										</ul>
									</div>
									<div class='col-lg-3  col-md-3 col-sm-4 col-xs-6'>
										<h3>VENDORS</h3>
										<ul>
											<li>
												<Link to='/gabaoptical'> Gaba Optical </Link>
											</li>
											<li>
												<Link to='/opticraft'> Opticraft </Link>
											</li>
											<li>
												<Link to='/optec'> Optec </Link>
											</li>
											<li>
												<Link to='/visionexpress'> Vision Expresss </Link>
											</li>
										</ul>
									</div>
									<div class='col-lg-3  col-md-3 col-sm-6 col-xs-12 '>
										<h3>GET IN TOUCH</h3>
										<div className='contact-icons'>
											<i class='fas fa-map-marker-alt mr-3'></i>
											<span>SM Taufeeq Road, Karachi</span>

											<br />
											<i class='fas fa-phone mr-3'></i>
											<span>+92 3152174051</span>

											<br />
											<i class='fas fa-envelope mr-3'></i>
											<span>alifaraz7866@gmail.com</span>
										</div>
										<div class='social-align'>
											<ul class='social'>
												<li>
													<a href='https://www.facebook.com/'>
														<i class='fab fa-facebook'> </i>
													</a>
												</li>
												<li>
													<a href='https://www.instagram.com/'>
														<i class='fab fa-instagram'> </i>
													</a>
												</li>
												{/* <li>
													<a href='#'>
														<i class='fab fa-github'> </i>
													</a>
												</li> */}
											</ul>
										</div>
									</div>
								</div>
								{/*row*/}
							</div>
							{/*container*/}
						</div>
						{/*footer*/}

						<div class='footer-bottom'>
							<div style={{ marginTop: '25px' }} class='container'>
								<p class='pull-left'>
									Copyright © Optics Store 2020. All rights reserved. Design and
									Developed with{' '}
									<i style={{ color: 'red' }} class='far fa-heart'></i> By Syed
									Faraz Ali.
								</p>
								<div class='pull-right'>
									<ul class='nav nav-pills payments'>
										<li>
											<i class='fab fa-cc-visa'></i>
										</li>
										<li>
											<i class='fab fa-cc-mastercard'></i>
										</li>
										<li>
											<i class='fab fa-cc-amex'></i>
										</li>
										<li>
											<i class='fab fa-cc-paypal'></i>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/*footer-bottom*/}
					</footer>
				</div>
			</div>
		);
	}
}
