import React, { Component } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

class Related_Products extends Component {
	render() {
		return (
			<div>
				{/*-----------------------Related Products-------------------------*/}
				<div style={{ overflowX: 'hidden' }} id='related-products'>
					<div
						style={{ marginTop: '150px', marginBottom: '20PX' }}
						className='products'
					>
						<h2 style={{ marginBottom: '50px' }} className='text-center'>
							<span style={{ borderBottom: '2px solid red', color: 'black' }}>
								Related Products
							</span>
						</h2>
						<div className='row'>
							<div className='offset-md-2'></div>
							<div className='col-md-2'>
								<Link to='/dusk'>
									<img
										className='img-fluid'
										src='images/Product Page/Thumbnail-1-dusk-red-360x160.jpg'
									/>
									<div className='row'>
										<div className='col-md-12 col-sm-12'>
											<span className='d-block text-center'>DUSK</span>
											<span className='d-block text-center'>Rs 1,600</span>
										</div>
									</div>
								</Link>
							</div>
							<div className='col-md-2'>
								<Link to='/holidaypurple'>
									<img
										className='img-fluid'
										src='images/Product Page/Thumbnail-1-holiday-purple-360x160.jpg'
									/>
									<div className='row'>
										<div className='col-md-12 col-sm-12'>
											<span className='d-block text-center'>
												HOLIDAY PURPLE
											</span>
											<span className='d-block text-center'>Rs 1,500</span>
										</div>
									</div>
								</Link>
							</div>
							<div className='col-md-2'>
								<Link to='/karenwalker'>
									<img
										className='img-fluid'
										src='images/Product Page/Thumbnail-1-karen-walker-gold-360x160.jpg'
									/>
									<div className='row'>
										<div className='col-md-12 col-sm-12'>
											<span className='d-block text-center'>
												KAREN WALKER GOLD
											</span>
											<span className='d-block text-center'>Rs 2,000</span>
										</div>
									</div>
								</Link>
							</div>
							<div className='col-md-2'>
								<Link to='/diesel7963'>
									<img
										className='img-fluid'
										src='images/Product Page/Thumbnail-Diesel-7963-360x160.jpg'
									/>

									<div className='row'>
										<div className='col-md-12 col-sm-12'>
											<span className='d-block text-center'>DIESEL 7963</span>
											<span className='d-block text-center'>Rs 1,500</span>
										</div>
									</div>
								</Link>
							</div>
							<div className='offset-md-2'></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Related_Products;
