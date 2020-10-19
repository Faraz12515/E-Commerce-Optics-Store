import React, { Component } from 'react';
import { Footer } from './Footer';

class Bifocal_Lenses extends Component {
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
							<h1 style={{ textTransform: 'uppercase' }}>Bifocal Lenses</h1>
						</div>
					</div>

					<div className='row justify-content-center mt-5'>
						<div className='col-sm-12'>
							<h3 className='text-center'>TRANSITION / PHOTOCHROMIC LENS</h3>
							<p className='text-center mt-3 mb-1'>
								Transition lenses adjus their opacity from clearer to darken
								when light changes. These lenses are best for those who don't
								want
							</p>
							<p className='text-center mb-1'>
								necessary carrying of extra glasses with them and at the same
								time need protection while travelling outside in clear sun.
							</p>
							<p className='text-center mb-1'>
								Photothermic lenses have variable tints that change according to
								the intensity of natura light.
							</p>
						</div>
					</div>

					<div>
						<div className='row justify-content-center mt-5'>
							<div className='images mt-4'>
								<div className='row'>
									<div className='offset-md-1'></div>

									<div className='col-md-5'>
										<img
											className='img-fluid'
											src='images/Bifocal Lenses/Biofical-480x580.png'
										/>
									</div>

									<div className='col-md-5'>
										<h3 className='text-center'>EXTRAORDINARY FEATURES</h3>
										<div className='row mt-5'>
											<div className='col-md-4'>
												<div className='row'>
													<div className='col-md-12'>
														<img
															className='img-fluid text-center ml-4'
															src='images/Bifocal Lenses/icons_03.png'
															alt=''
														/>
														<p className='text-center mr-1'>
															Lower part has a circular reading area
														</p>
													</div>
												</div>
											</div>

											<div className='col-md-4'>
												<div className='row'>
													<div className='col-md-12'>
														<img
															className='img-fluid text-center ml-4'
															src='images/Bifocal Lenses/icons_09.png'
															alt=''
														/>
														<p className='text-center mr-2'>Fine Quality</p>
													</div>
												</div>
											</div>

											<div className='col-md-4'>
												<div className='row'>
													<div className='col-md-12'>
														<img
															className='img-fluid text-center ml-4'
															src='images/Single Lenses/icons_11.png'
															alt=''
														/>
														<p className='text-center mr-2'>
															Scratch Resistant
														</p>
													</div>
												</div>
											</div>
										</div>

										<div className='row'>
											<div className='offset-md-4'></div>
											<div className='col-md-4'>
												<div className='row'>
													<div className='col-md-12'>
														<img
															className='img-fluid text-center ml-4'
															src='images/Single Lenses/Standard.png'
															alt=''
														/>
														<p className='text-center mr-2'>
															Standard Thickness
														</p>
													</div>
												</div>
											</div>
											<div className='offset-md-4'></div>
										</div>
										<br />

										<div className='row'>
											<div className='col-md-4'>
												<div
													style={{
														borderLeft: '3px solid red',
														textAlign: 'center',
														backgroundColor: 'pink'
													}}
												>
													<p>
														Price in Glass: <b>Rs 800</b>
													</p>
												</div>
											</div>

											<div className='col-md-4'>
												<div
													style={{
														borderLeft: '3px solid red',
														textAlign: 'center',
														backgroundColor: 'pink'
													}}
												>
													<p>
														Price in Plastic: <b>Rs 1500</b>
													</p>
												</div>
											</div>

											<div className='col-md-4'>
												<div
													style={{
														borderLeft: '3px solid red',
														textAlign: 'center',
														backgroundColor: 'pink'
													}}
												>
													<p>
														Antiglare Plastic: <b>Rs 2500</b>
													</p>
												</div>
											</div>
										</div>
									</div>
									<div className='offset-md-1'></div>
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

export default Bifocal_Lenses;
