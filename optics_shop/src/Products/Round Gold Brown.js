import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import Related_Products from '../Related Products';
import { Footer } from '../Footer';

//-------------------STRIPE------------------------//
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export class Round_Gold_Brown extends Component {
	//-------------------STRIPE------------------------//
	async handleToken(token, addresses) {
		const product = {
			name: 'ROUND 8729 GOLD BROWN',
			price: 7.76,
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
						<h1 className='text-center product'>ROUND 8729 GOLD BROWN</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-8729-1.jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-8729-3.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-8729-4.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Round-8729-5.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>ROUND 8729 GOLD BROWN</h2>
								<p className='price'>Rs 1200</p>
								<p className='price'>USD $7.76</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
									<p>
										<b>Brand:</b> Tom Ford
									</p>
								</div>
								{/* 
								<label className='lable'>
									<p>Quantity:</p>
								</label>
								<input type='text' value='1' /> */}
								<br />
								{/*-----------------STRIPE---------------- */}
								<StripeCheckout
									stripeKey='pk_test_k8NaGAblQYTvRE1DyWW02KZU00dTJBLPR5'
									token={this.handleToken}
									amount={7.76 * 100}
									name='ROUND 8729 GOLD BROWN'
								/>
								<Link to='/' type='button' className='btn btn-secondary back'>
									<i className='fas fa-arrow-left'></i> Continue Shopping
								</Link>
							</div>

							<div className='col-md-4 bg-light'>
								<h2>Additional Information</h2>
								<div className='product-information'>
									<p>
										<b>Dimensions:</b> 57 x 16 x 135 mm
									</p>
									<p>
										<b>Colors:</b> Brown, Black, Gold Brown
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
										<b>Size:</b> Medium
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

export default Round_Gold_Brown;
