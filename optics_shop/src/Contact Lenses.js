import React, { Component } from 'react';
import { Footer } from './Footer';

class Contact_Lenses extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contactlenses1: [
				{
					key: 0,
					name1: 'BELLA DIAMOND',
					name2: 'BELLA GLOW',
					name3: 'BELLA HIGHLIGHT',

					price1: 3800,
					price2: 3560,
					price3: 2500
				}
			],

			contactlenses2: [
				{
					key: 1,
					name1: 'BELLA ELITE',
					name2: 'BELLA NATURAL',
					name3: 'BELLA ONE DAY',

					price1: 3950,
					price2: 2650,
					price3: 800
				}
			]
		};
	}

	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div>
						<img
							className='img-fluid'
							src='/images/Header/Eye-lens-price-in-pakistan.jpg'
						/>
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'white'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Contact Lenses</h1>
						</div>
					</div>

					<div className='row justify-content-center bg-secondary text-white'>
						<div className='col-sm-12 justify-content-center'>
							<p className='text-center mt-2 mb-1'>
								Clam up your personality with Bella colored lenses now available
								in Pakistan.
							</p>
							<p className='text-center mb-1'>
								Upgrade your eyewear wardrobe with our gorgeous eye lens
							</p>
							<p className='text-center mb-2'>
								and get the best eye lens price in Pakistan.
							</p>
						</div>
					</div>

					{this.state.contactlenses1.map(item => (
						<div style={{ marginTop: '50px' }} className='products'>
							<div className='row ml-5'>
								<div className='offset-md-1'></div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Diamond-360x160.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name1}
												</span>
												<span className='d-block text-center'>
													Rs {item.price1}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Glow-Copy-6-360x160.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name2}
												</span>
												<span className='d-block text-center'>
													Rs {item.price2}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Highlight-Copy-3-360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name3}
												</span>
												<span className='d-block text-center'>
													Rs {item.price3}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-1'></div>
							</div>
						</div>
					))}

					{this.state.contactlenses2.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row ml-5'>
								<div className='offset-md-1'></div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Elite-Copy-3-360x160.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name1}
												</span>
												<span className='d-block text-center'>
													Rs {item.price1}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Natural-Copy-5.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name2}
												</span>
												<span className='d-block text-center'>
													Rs {item.price2}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-3'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Bellla Contact Lenses In Pakistan/Thumbnail-Bella-Oneday-360x160.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name3}
												</span>
												<span className='d-block text-center'>
													Rs{item.price3}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-1'></div>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Contact_Lenses;
