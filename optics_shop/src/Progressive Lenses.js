import React, { Component } from 'react';
import { Footer } from './Footer';

class Progressive_Lenses extends Component {
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
							<h1 style={{ textTransform: 'uppercase' }}>Progressive Lenses</h1>
						</div>
					</div>

					<div className='row justify-content-center mt-5'>
						<div className='col-sm-12'>
							<h3 className='text-center'>PROGRESSIVE LENS</h3>
							<p className='text-center mt-3 mb-1'>
								Progressive Lenses are just like Bifocal Lenses with a
								difference that these are free from the partition line that
								segregate the multifocal lens.This lens is a unique piece
							</p>
							<p className='text-center mb-1'>
								of modern technology that enables our customers to use bifocal
								lens in a single formed lens. These lenses are just like bifocal
								lenses best fit in the frames
							</p>
							<p className='text-center mb-1'>
								that have height of 30mm as we suggest our customers a 60% to
								40% ratio of distance vision and near vision respectively in the
								lens. Now a days,
							</p>
							<p className='text-center mb-1'>
								it's becoming a large trend and is in high demand by the
								customers. Just try this one time and ou will not regret your
								decision.
							</p>
						</div>
					</div>

					<div className='row justify-content-center mt-5'>
						<div className='images mt-5'>
							<div className='row'>
								<div className='offset-md-1'></div>

								<div className='col-md-5'>
									<img
										className='img-fluid'
										src='images/Progressive Lenses/Progressive-520x540.jpg'
									/>
								</div>

								<div className='col-md-5'>
									<h3 className='text-center'>EXTRAORDINARY FEATURES</h3>
									<div className='row mt-5 ml-2'>
										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/icons_14.png'
														alt=''
													/>
													<p className='text-center mr-4'>No Line</p>
												</div>
											</div>
										</div>

										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/HD1.png'
														alt=''
													/>
													<p className='text-center mr-3'>High Definition</p>
												</div>
											</div>
										</div>

										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/icons_11.png'
														alt=''
													/>
													<p className='text-center mr-3'>
														Green Coating in Anti-Glare
													</p>
												</div>
											</div>
										</div>
									</div>

									<div className='row ml-2'>
										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/Light-1.png'
														alt=''
													/>
													<p className='text-center mr-4'>Light Weight</p>
												</div>
											</div>
										</div>

										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/Clear-2-1.png'
														alt=''
													/>
													<p className='text-center mr-3'>Clear</p>
												</div>
											</div>
										</div>
										<div className='col-md-4'>
											<div className='row'>
												<div className='col-md-12'>
													<img
														className='img-fluid text-center ml-3'
														src='images/Single Lenses/Standard.png'
														alt=''
													/>
													<p className='text-center mr-3'>Standard Thickness</p>
												</div>
											</div>
										</div>
									</div>

									<div className='row mt-4'>
										<div className='col-md-6'>
											<div
												style={{
													borderLeft: '3px solid red',
													textAlign: 'center',
													backgroundColor: 'pink'
												}}
											>
												<p>
													Progressive (No line in lens): <b>Rs 2500</b>
												</p>
											</div>
										</div>

										<div className='col-md-6'>
											<div
												style={{
													borderLeft: '3px solid red',
													textAlign: 'center',
													backgroundColor: 'pink'
												}}
											>
												<p>
													Progressive (Anti glare spherical): <b>Rs 3000</b>
												</p>
											</div>
										</div>
									</div>

									<div className='row'>
										<div className='col-md-6'>
											<div
												style={{
													borderLeft: '3px solid red',
													textAlign: 'center',
													backgroundColor: 'pink'
												}}
											>
												<p>
													Progressive Anti glare(Cylinder No.): <b>Rs 4500</b>
												</p>
											</div>
										</div>

										<div className='col-md-6'>
											<div
												style={{
													borderLeft: '3px solid red',
													textAlign: 'center',
													backgroundColor: 'pink'
												}}
											>
												<p>
													Transition anti glare progressive: <b>Rs 6000</b>
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
				<Footer />
			</div>
		);
	}
}

export default Progressive_Lenses;
