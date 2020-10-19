import React, { Component } from 'react';
import { Footer } from './Footer';

class Eyeglasses extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eyeglasses1: [
				{
					key: 0,
					name1: 'BVLGARI 207 BLACK',
					name2: 'BVLGARI 207 SLIM',
					name3: '9046',
					name4: '9035',
					price1: 2700,
					price2: 2800,
					price3: 2500,
					price4: 2500
				}
			],

			eyeglasses2: [
				{
					key: 1,
					name1: '6560',
					name2: '8051',
					name3: '9046',
					name4: '9035',
					price1: 2700,
					price2: 2500,
					price3: 2500,
					price4: 2500
				}
			],

			eyeglasses3: [
				{
					key: 2,
					name1: '2133',
					name2: 'CATEYE 1815',
					name3: 'FOCUS 1202',
					name4: 'FOCUS BLACK 1101',
					price1: 2800,
					price2: 1300,
					price3: 900,
					price4: 1200
				}
			],

			eyeglasses4: [
				{
					key: 3,
					name1: 'NIKE 5532',
					name2: 'PORSCHE 8815',
					name3: 'T 324',
					name4: '8051',
					price1: 1200,
					price2: 1200,
					price3: 900,
					price4: 900
				}
			],

			eyeglasses5: [
				{
					key: 4,
					name1: 'OAKLEY 5642',
					name2: '6083',
					name3: 'FOCUS 1202',
					name4: 'CAT EYE 1815',
					price1: 5000,
					price2: 1000,
					price3: 1500,
					price4: 900
				}
			],

			eyeglasses6: [
				{
					key: 5,
					name1: 'FOCUS 1101',
					name2: 'FOCUS VOGUE 1202',
					name3: 'ROUND 1212',
					name4: '6802',
					price1: 1000,
					price2: 1000,
					price3: 900,
					price4: 1000
				}
			]
		};
	}

	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div>
						<img class='img-fluid' src='images/Header/Eyeglasses_1.jpg' />
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'black'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Eyeglasses</h1>
						</div>
					</div>
					{this.state.eyeglasses1.map(item => (
						<div style={{ marginTop: '50px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_12148_Black_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_12195_brown_gold_1_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_6082_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_6083_Black_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}
					{this.state.eyeglasses2.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_6560_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_8051_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_9046_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_black_9035_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}
					{this.state.eyeglasses3.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_black_grey_0008_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_Cat_Eye_1815_Black_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_focus_1202_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_focus_blackk_1101_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}
					{this.state.eyeglasses4.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_Nike_5532_1_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_porsche_8815_brown_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_R6572_Black_360x160.jpg'
										/>
										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name3}
												</span>
												<span className='d-block text-center'>
													RS {item.price3}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_rayban_7048_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}
					{this.state.eyeglasses5.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_Round_1212_Black_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_t324_Black_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_TR_9220_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_Transparent_9048_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}

					{this.state.eyeglasses6.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_transparent_9623_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_vogue_5656_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/Thumbnail_Wood_4242_Black_360x160.jpg'
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
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Eye_glasses___Best_eye_glasses___Eyeglasses_in_pakistan/oakley_5642_thumbnail_360x160.jpg'
										/>

										<div className='row'>
											<div className='col-md-12 col-sm-12'>
												<span className='d-block text-center'>
													{item.name4}
												</span>
												<span className='d-block text-center'>
													Rs {item.price4}
												</span>
											</div>
										</div>
									</a>
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>
					))}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Eyeglasses;
