import React, { Component } from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import Related_Products from '../Related Products';
import { Footer } from '../Footer';

//-------------------STRIPE------------------------//
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export class Holiday_Purple extends Component {
	//-------------------STRIPE------------------------//
	async handleToken(token, addresses) {
		const product = {
			name: 'HOLIDAY PURPLE',
			price: 9.7,
			description: 'Tom Ford'
		};

		const response = await axios.post('http://localhost:5000/checkout', {
			token,
			product
		});
		const { status } = response.data;
		console.log('Response:', response.data);
		if (status === 'success') {
			toast('Success! Check email for details', { type: 'success' });
		} else {
			toast('Something went wrong', { type: 'error' });
		}
	}
	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div className='jumbotron'>
						<h1 className='text-center product'>HOLIDAY PURPLE</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Holiday-Purple-1..jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Holiday-Purple-2..jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Holiday-Purple-3..jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Holiday-Purple-4..jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Holiday-Purple-5..jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>HOLIDAY PURPLE</h2>
								<p className='price'>Rs 1,500</p>
								<p className='price'>USD $9.70</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
									<p>
										<b>Brand:</b> Tom Ford
									</p>
								</div>

								<br />
								{/*-----------------STRIPE---------------- */}
								<StripeCheckout
									stripeKey='pk_test_k8NaGAblQYTvRE1DyWW02KZU00dTJBLPR5'
									token={this.handleToken}
									amount={this.price * 100}
									name={this.name}
								/>
								<Link to='/' type='button' className='btn btn-secondary back'>
									<i className='fas fa-arrow-left'></i> Continue Shopping
								</Link>
							</div>

							<div className='col-md-4 bg-light'>
								<h2>Additional Information</h2>
								<div className='product-information'>
									<p>
										<b>Colors:</b> Black, Brown, Purple
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
										<b>Material:</b> Mix Material
									</p>
									<p>
										<b>Shape:</b> Aviator
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

export default Holiday_Purple;
