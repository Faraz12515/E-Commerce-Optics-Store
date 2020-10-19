import React, { Component } from 'react';
import { Footer } from './Footer';

class Sunglasses extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sunglasses1: [
				{
					key: 0,
					name1: 'WAYFARER RB 2140 SUN',
					name2: 'ROUND 1523 BLUE',
					name3: 'ROUND 1523 RED',
					name4: 'ROUND 1523 TORTOISE',
					price1: 1600,
					price2: 1500,
					price3: 1500,
					price4: 1500
				}
			],

			sunglasses2: [
				{
					key: 1,
					name1: 'ROUND 8729 BLUE TINT',
					name2: 'GENTLE MONSTER BREAMER',
					name3: 'BLACK GREEN 2140',
					name4: 'GOLD BROWN 3477',
					price1: 1500,
					price2: 2500,
					price3: 1500,
					price4: 2200
				}
			],

			sunglasses3: [
				{
					key: 2,
					name1: 'WAYFARER 5052 SUN',
					name2: 'CAT EYE 8090 BLACK',
					name3: 'CAT EYE 8090 BROWN',
					name4: 'DIESEL 7963',
					price1: 1600,
					price2: 1300,
					price3: 1300,
					price4: 5000
				}
			],

			sunglasses4: [
				{
					key: 3,
					name1: 'EYE CAT 8461',
					name2: 'CLUBMASTER',
					name3: 'RB 3016 POLARIZED',
					name4: 'DITA FLIGHT 006',
					price1: 1300,
					price2: 3500,
					price3: 1500,
					price4: 6500
				}
			],

			sunglasses5: [
				{
					key: 4,
					name1: 'HEXAGONAL 3548',
					name2: 'HEXAGONAL 88210',
					name3: 'MARC JACOBS 215',
					name4: 'MOSCOT LEMTOSH SUN',
					price1: 1800,
					price2: 1500,
					price3: 3000,
					price4: 4000
				}
			],

			sunglasses6: [
				{
					key: 5,
					name1: 'OCTAGONAL',
					name2: 'POLICE 4241 POLARIZED',
					name3: 'PORSCHE 503',
					name4: 'ROUND 87290',
					price1: 1200,
					price2: 2200,
					price3: 4000,
					price4: 2500
				}
			]
		};
	}

	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
					<div>
						<img class='img-fluid' src='images/Header/Sunglasses_1.jpg' />
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'white'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Sunglasses</h1>
						</div>
					</div>
					{this.state.sunglasses1.map(item => (
						<div style={{ marginTop: '50px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnai_Wayfarer_2140_large.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_1_Round_1523_Blue.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_1_Round_1523_Pink_1_1.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_1_Round_1523_Tortoise_1.jpg'
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

					{this.state.sunglasses2.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_1_Round_Gray.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_1_The_Derma_Black.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_2140_Black_Green.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_3477_Gold_Brown_360x160.jpg'
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
					{this.state.sunglasses3.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_5052_Black_Gray.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Cat_Eye_8090_Black.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Cat_Eye_8090_Brown.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Cat_Eye_8416_Brown.jpg'
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

					{this.state.sunglasses4.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Cat_Eye_8461_Pink.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_club_master_Black_silver_360x160.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Clubmaster_RB3016_Tortoise.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Dita_Flight_006_Black_Gold_360x160.jpg'
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

					{this.state.sunglasses5.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Hexagonal_3548_Black_.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Hexagonal_88210_Black.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Marc_Jacob_215_360x160.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Moscot_Sunglasses.jpg'
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

					{this.state.sunglasses6.map(item => (
						<div style={{ marginTop: '20px' }} className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>
									<a href='#'>
										<img
											className='img-fluid'
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Octagonal_360x160.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Police_4241_Matte_Black__360x160.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Porsche_503_Black_360x160.jpg'
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
											src='images/Buy_Affordable_Sunglasses_in_Pakistan_at_Best_Prices_Online___Ainak.pk/Thumbnail_Round_87290_Gold.jpg'
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

export default Sunglasses;
