import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import Related_Products from '../Related Products';
import { Footer } from '../Footer';

export class Wayfarer_2140 extends Component {
	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div className='jumbotron'>
						<h1 className='text-center product'>WAYFARER 2140</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Wayfarer-2140-Large-54-18-1.jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Wayfarer-2140-Large-54-18-2.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Wayfarer-2140-Large-54-18-3.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Wayfarer-2140-Large-54-18-4.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>WAYFARER 2140</h2>
								<p className='price'>Rs 4000</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
									<p>
										<b>Brand:</b> Tom Ford
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
										<b>Colors:</b> Tortoise
									</p>
									<p>
										<b>Features:</b> No Spring
									</p>
									<p>
										<b>Gender:</b> Men, Women
									</p>
									<p>
										<b>Rim:</b> Full Rim
									</p>
									<p>
										<b>Material:</b> Acetate
									</p>
									<p>
										<b>Shape:</b> Wayfarer
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

export default Wayfarer_2140;
