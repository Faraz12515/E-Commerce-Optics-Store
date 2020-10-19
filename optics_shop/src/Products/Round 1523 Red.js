import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import Related_Products from '../Related Products';
import { Footer } from '../Footer';

export class Round_1523_Red extends Component {
	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div className='jumbotron'>
						<h1 className='text-center product'>ROUND 1523 RED</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-1523-pink-1-1.jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-1523-pink-5-1.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-1523-pink-6-1.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-1523-pink-7-2.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>ROUND 1523 RED</h2>
								<p className='price'>Rs 1600</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
								</div>

								<label className='lable'>
									<p>Quantity:</p>
								</label>
								<input type='text' value='1' />
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
										<b>Colors:</b> Pink, Red
									</p>
									<p>
										<b>Features:</b> No Spring
									</p>
									<p>
										<b>Gender:</b> Women
									</p>
									<p>
										<b>Rim:</b> Full Rim
									</p>
									<p>
										<b>Material:</b> Plastic
									</p>
									<p>
										<b>Shape:</b> Round
									</p>
									<p>
										<b>Size:</b> Large
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Related_Products />
				<Footer />
			</div>
		);
	}
}

export default Round_1523_Red;
