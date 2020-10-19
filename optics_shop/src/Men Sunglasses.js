import React, { Component } from 'react';
import { Footer } from './Footer';

class Men_Sunglasses extends Component {
	constructor(props) {
		super(props);

		this.state = {
			mensunglasses1: [
				{
					key: 0,
					name1: 'WAYFARER RB 2140 LARGE',
					name2: 'ROUND 8729 BLUE TINT',
					name3: 'GENTLE MONSTER DREAMER',
					name4: 'WAYFARER 2140 SUN',
					price1: 4000,
					price2: 1500,
					price3: 2500,
					price4: 1600
				}
			],

			mensunglasses2: [
				{
					key: 1,
					name1: 'CARVAN 3477',
					name2: 'DITA CONDOR',
					name3: 'WAYFARER 5052 SUN',
					name4: 'AVIATOR 8890',
					price1: 2200,
					price2: 2500,
					price3: 1600,
					price4: 2500
				}
			],

			mensunglasses3: [
				{
					key: 2,
					name1: 'RAY BAN AVIATOR',
					name2: 'CARRERA 55J',
					name3: 'CLUBMASTER',
					name4: 'RB 3016 POLARIZED',
					price1: 1800,
					price2: 2500,
					price3: 3500,
					price4: 4500
				}
			],

			mensunglasses4: [
				{
					key: 3,
					name1: 'DITA FLIGHT 006',
					name2: 'HEXAGONAL 3548',
					name3: 'HEXAGONAL 88210',
					name4: 'MARC JACOBS 215',
					price1: 6500,
					price2: 1800,
					price3: 1500,
					price4: 4500
				}
			],

			mensunglasses5: [
				{
					key: 4,
					name1: 'MOSCOT LEMTOSH SUN',
					name2: 'OCTAGONAL',
					name3: 'POLICE 4240 POLARIZED',
					name4: 'POLICE 3598 POLARIZED',
					price1: 4000,
					price2: 1200,
					price3: 2200,
					price4: 2200
				}
			],

			mensunglasses6: [
				{
					key: 5,
					name1: 'POLICE 4241 POLARIZED',
					name2: 'CARTIER 072',
					name3: 'RAYBAN 5018',
					name4: 'ROUND 87290',
					price1: 2200,
					price2: 4000,
					price3: 1600,
					price4: 1500
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
							src='images/Header/Men-SunGlasses-1.jpg'
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
							<h1 style={{ textTransform: 'uppercase' }}>Men Sunglasses</h1>
						</div>
					</div>

					<div className='row justify-content-center bg-secondary text-white'>
						<div className='col-md-12 justify-content-center'>
							<p className='text-center mt-2 mb-1'>
								Raisebbthe bar of your style with our trenfy sunglasses.Select
							</p>
							<p className='text-center mb-1'>
								from a wide range of men's designer sunglasses,enjoy outdoors
								and stay
							</p>
							<p className='text-center mb-2'>
								in the game with our cooling shades!
							</p>
						</div>
					</div>

					{this.state.mensunglasses1.map(item => (
						<div style={{ marginTop: '50px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnai-Wayfarer-2140-large.jpg'
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
											src='images/Men Sunglasses/Thumbnail-1-Round-Gray.jpg'
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
											src='images/Men Sunglasses/Thumbnail-1-The-Derma-Black.jpg'
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
											src='images/Men Sunglasses/Thumbnail-2140-Black-Green.jpg'
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

					{this.state.mensunglasses2.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnail-3477-Gold-Brown-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-5052-Black-Gray.jpg'
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
											src='images/Men Sunglasses/Thumbnail-aviator-8890-360x160.jpg'
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
					{this.state.mensunglasses3.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnail-Aviator-Gold-Green-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Carrera-55j-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-club-master-Black-silver-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Clubmaster-RB3016-Tortoise.jpg'
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
					{this.state.mensunglasses4.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnail-Dita-Flight-006-Black-Gold-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Hexagonal-3548-Black-.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Hexagonal-88210-Black.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Marc-Jacob-215-360x160.jpg'
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
					{this.state.mensunglasses5.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnail-Moscot-Sunglasses.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Octagonal-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Police-3598-Matte-Black--360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Police-4240-Matte-Black--360x160.jpg'
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
					{this.state.mensunglasses6.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Men Sunglasses/Thumbnail-Police-4241-Matte-Black--360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Porsche-503-Black-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Rayban-5018-360x160.jpg'
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
											src='images/Men Sunglasses/Thumbnail-Round-87290-Gold.jpg'
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

export default Men_Sunglasses;
