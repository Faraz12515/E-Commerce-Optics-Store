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

export class TOM_FORD_452 extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		quantity: 0
	// 	};
	// 	// this.handleToken = this.handleToken.bind(this);
	// }

	//-------------------STRIPE------------------------//
	async handleToken(token, addresses) {
		const product = {
			name: 'TOM FORD 452',
			price: 32.74,
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
						<h1 className='text-center product'>TOM FORD 452</h1>
					</div>

					<div className='container'>
						<div className='row'>
							<div className='col-md-5'>
								<Carousel>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Tom-Ford-452-Black-Gray-1.jpg'
											alt='First slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Tom-Ford-452-Black-Gray-2.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Tom-Ford-452-Black-Gray-3.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Tom-Ford-452-Black-Gray-4.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className='d-block w-100'
											src='images/Product Page/Tom-Ford-452-Black-Gray-5.jpg'
											alt='Third slide'
										/>
									</Carousel.Item>
								</Carousel>
							</div>

							<div className='col-md-3 bg-light'>
								{/* <p className="newarrival text-center">NEW</p> */}
								<h2>TOM FORD 452</h2>
								<p className='price'>Rs 5000</p>
								<p className='price'>USD $32.34</p>

								<div className='availability-brand'>
									<p>
										<b>Availability:</b> In Stock
									</p>
									<p>
										<b>Brand:</b> Tom Ford
									</p>
								</div>

								{/* <label className='lable'>
									Quantity:
									<input
										type='number'
										value={this.state.quantity}
										min='1'
										max='10'
										onChange={e => this.setState({ quantity: e.target.value })}
									/>
								</label> */}

								<br />

								{/*-----------------STRIPE---------------- */}
								<StripeCheckout
									stripeKey='pk_test_k8NaGAblQYTvRE1DyWW02KZU00dTJBLPR5'
									token={this.handleToken}
									amount={32.34 * 100}
									name='TOM FORD 452'
								/>

								{/* <Link to='/login' type='button' className='btn btn-danger cart'>
									<i className='fas fa-shopping-cart'></i> Buy Product
								</Link> */}
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
										<b>Colors:</b> Black-Gold, Black-Grey, Brown-Gold
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

export default TOM_FORD_452;
