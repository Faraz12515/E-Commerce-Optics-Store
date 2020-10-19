import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import { Footer } from '../Footer';

export class One_day_bella extends Component {
	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div className='jumbotron'>
						<h1 className='text-center product'>ONE DAY BELLA</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Bella-Oneday-Box-Copy.jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Bella-Natural-Copy-2.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>MOSCOT</h2>
								<p className='price'>Rs 800</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
									<p>
										<b>Brand:</b> Bella
									</p>
								</div>

								<br />
								<Link type='button' className='btn btn-danger cart'>
									<i className='fas fa-shopping-cart'></i> Buy Product
								</Link>
								<Link to='/' type='button' className='btn btn-secondary back'>
									<i className='fas fa-arrow-left'></i> Continue Shopping
								</Link>
							</div>

							<div className='col-md-4 bg-light'>
								<h2>Additional Information</h2>
								<div className='product-information'>
									<p>
										<b>Colors:</b> Black, Gray, Green, Brown
									</p>
									<p>
										<b>Features:</b> Waterproof
									</p>
									<p>
										<b>Gender:</b> Men, Women
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default One_day_bella;
