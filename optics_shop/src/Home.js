import React, { Component } from 'react';
import './App.css';
import { NavLink, Link } from 'react-router-dom';
import { Footer } from './Footer';
import Navigation from './Navigation';
import Vendor_Carousel from './Vendor Carousel';



class Home extends Component {


	constructor(props) {
		super(props);
		this.state = {

			

			home1: [
				{
					id:1,
					name1: 'TOM FORD 452',
					price1: 5000
				}
			],
			home2: [
				{
					id:2,
					name2: 'NIKE 5532',
					price2: 5000
				}
			],
			home3: [
				{
					id:3,
					name3: 'ROUND 8729 GOLD BROWN',
					price3: 1200
				}
			],
			home4: [
				{
					id:4,
					name4: '6572',
					price4: 1200
				}
			],

			home5: [
				{
					name5: 'MOSCOT',
					price5: 3500
				}
			],

			home6: [
				{
					name6: 'MOSCOT LEMTOSH',
					price6: 3500
				}
			],
			home7: [
				{
					name7: 'MOSCOT VILDA',
					price7: 4000
				}
			],
			home8: [
				{
					name8: 'POLICE 8560',

					price8: 2600
				}
			],

			home9: [
				{
					name9: 'MOSCOT',
					price9: 3500
				}
			],

			home10: [
				{
					name10: 'MOSCOT LEMTOSH',
					price10: 3500
				}
			],
			home11: [
				{
					name11: 'MOSCOT VILDA',
					price11: 4000
				}
			],

			home12: [
				{
					name12: 'POLICE 8560',
					price12: 2600
				}
			],

			home13: [
				{
					name13: 'TOM FORD 711',
					price13: 3500
				}
			],

			home14: [
				{
					name14: 'TOM FORD 9350',
					price14: 3500
				}
			],
			home15: [
				{
					name15: 'TOM FORD 211',
					price15: 4000
				}
			],

			home16: [
				{
					name16: 'TOM FORD 630',
					price16: 2600
				}
			],

			home17: [
				{
					name17: 'TOM FORD 613',
					price17: 5000
				}
			],

			home18: [
				{
					name18: 'TOM FORD 475',
					price18: 5000
				}
			],
			home19: [
				{
					name19: 'TOM FORD 711',
					price19: 5000
				}
			],

			home20: [
				{
					name20: 'TOM FORD 430',
					price20: 5000
				}
			],

			home21: [
				{
					name21: 'BELLA ONE DAY',
					price21: 800
				}
			],

			home22: [
				{
					name22: 'BELLA NATURAL',
					price22: 2650
				}
			],
			home23: [
				{
					name23: 'ROUND 8729 GOLD BROWN',
					price23: 3950
				}
			],

			home24: [
				{
					name24: 6572,
					price24: 3180
				}
	        ],

		
		};

	}
   

	render() {

		

		const { productsDemo }=this.state;

		return (

			<div>

				<div style={{ overflowX: 'hidden' }}>

					<div className='col-sm-12 '>
						<img
							className='img-fluid'
							src='images/Header/September-Banner.gif'
							alt='banner'
						/>
					</div>

					<div className='row justify-content-center bg-secondary text-white'>
						<div className='col-sm-12'>
							<p className='text-center mt-3 mb-1'>
								* Rs.200 charges will be applied on "Home Try On" service, if no
								order is placed
							</p>
							<p className='text-center'>
								** No service charges will be applied if order is placed
							</p>
						</div>
						<div className='row justify-content-right'>
							<div className='col-md-12'>
								<button className='btn btn-danger mb-2'>Learn More</button>
							</div>
						</div>
					</div>

					<Vendor_Carousel/>

					<div style={{ marginTop: '150px' }}>
						<div className='row'>
							<div className=' col-sm-12 '>
								<h3 className='text-center'>Best Selling Products</h3>
								<div className='row justify-content-center'>
									<p className='d-inline text-center'>Luxury Designs |</p>
									<p className='d-inline text-center'>
										Finest Quality Material |
									</p>
									<p className='d-inline text-center'>6 Months Warranty</p>
								</div>
							</div>
						</div>

						<div  className='products'>
							<div className='row'>
								<div className='offset-md-2'></div>
								<div className='col-md-2'>

							

									{this.state.home1.map(item => (
										<Link to='/tomford452'>
											<img
												className='img-fluid'
												src='images/Best Selling Products/Thumbnail-Tom-Ford-452-Black-Gray-360x160.jpg'
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
										</Link>
									))}
								</div>
								<div className='col-md-2'>
									{this.state.home2.map(item => (
										<Link to='/nike5532'>
											<img
												className='img-fluid'
												src='images/Best Selling Products/Thumbnail-Nike-5532-1-360x160.jpg'
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
										</Link>
									))}
								</div>
								<div className='col-md-2'>
									{this.state.home3.map(item => (
										<Link to='/roundbrowngold'>
											<img
												className='img-fluid'
												src='images/Best Selling Products/Round-8729-Gold-Brown-Thumbnail-360x160.jpg'
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
										</Link>
									))}
								</div>
								<div className='col-md-2'>
									{this.state.home4.map(item => (
										<Link href='#'>
											<img
												className='img-fluid'
												src='images/Best Selling Products/Thumbnail-R6572-Black-maroon-360x160.jpg'
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
										</Link>
									))}
								</div>
								<div className='offset-md-2'></div>
							</div>
						</div>

						<div className='row justify-content-center'>
							<button
								style={{ marginTop: '40px' }}
								className='btn btn-danger btn-lg'
							>
								<Link
									style={{
										textDecoration: 'none',
										color: 'white'
									}}
									to='/sunglasses'
								>
									Explore More Collection
								</Link>
							</button>
						</div>
					</div>

			        <div style={{marginTop: '100px'}}>
			        <div className="row">
			            <div className=" col-sm-12 ">
			            <h3 className="text-center">Eyeglasses for Men</h3>
			            <div className="row justify-content-center">
			                <p className="d-inline text-center">200 + Prescription Eyeglasses |</p>
			                <p className="d-inline text-center">Lowest Prices |</p>
			                <p className="d-inline text-center">Anti-Glare Lens</p>
			            </div>
			            </div>
			        </div>

			        <div className="products">
			            <div className="row">
			            <div className="offset-md-2"></div>
			            <div className="col-md-2">
			            {this.state.home5.map(item => (
			                <Link to="/moscot"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses for Men/Thumbnail-moscot1-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name5}</span>
			                    <span className="d-block text-center">Rs {item.price5}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home6.map(item => (
			                <Link to="/moscotlemtosh"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses for Men/Thumbnail-moscot-lemtosh-medium-tortoise-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name6}</span>
			                    <span className="d-block text-center">Rs {item.price6}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home7.map(item => (
			                <Link to="/moscotvilda"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses for Men/Thumbnail-moscot-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name7}</span>
			                    <span className="d-block text-center">Rs {item.price7}</span>
			                    </div>
			                </div>
			                </Link>
			            ))}
			            </div>

			            <div className="col-md-2">
			            {this.state.home8.map(item => (
			                <Link to="/police8560"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses for Men/Thumbnail-police-8560-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name8}</span>
			                    <span className="d-block text-center">Rs {item.price8}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="offset-md-2"></div>
			            </div>
			        </div>

			        <div className="row justify-content-center">
			            <button style={{marginTop: '40px'}} className="btn btn-danger btn-lg">
			            <Link
							style={{
								textDecoration: 'none',
								color:'white'
							}}
							to='/meneyeglasses'>
							Explore Men Eyeglasses
							</Link>
			            </button>
			        </div>

			        </div>

			        <div style={{marginTop: '100px'}}>
			        <div className="row">
			            <div className=" col-sm-12 ">
			            <h3 className="text-center">Eyeglasses for Women</h3>
			            <div className="row justify-content-center">
			                <p className="d-inline text-center">200 + Stylish Designs |</p>
			                <p className="d-inline text-center">Prescription Lens |</p>
			                <p className="d-inline text-center">Improved Clarity</p>
			            </div>
			            </div>
			        </div>

			        <div className="products">
			            <div className="row">
			            <div className="offset-md-2"></div>
			            <div className="col-md-2">
			            {this.state.home9.map(item => (
			                <Link to="/moscot"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses fo Women/Thumbnail-moscot1-360x160 (1).jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name9}</span>
			                    <span className="d-block text-center">Rs {item.price9}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home10.map(item => (
			                <Link to="/moscotlemtosh"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses fo Women/Thumbnail-moscot-lemtosh-medium-tortoise-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name10}</span>
			                    <span className="d-block text-center">Rs {item.price10}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			                {this.state.home11.map(item => (
			                <Link to="/moscotvilda"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses fo Women/Thumbnail-moscot-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name11}</span>
			                    <span className="d-block text-center">Rs {item.price11}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home12.map(item => (
			                <Link to="/police8560"
			                ><img
			                    className="img-fluid"
			                    src="images/Eyeglasses fo Women/Thumbnail-police-8560-360x160.jpg"
			                />

			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name12}</span>
			                    <span className="d-block text-center">Rs {item.price12}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="offset-md-2"></div>
			            </div>
			        </div>

			        <div className="row justify-content-center">
			            <button style={{marginTop: '40px'}} className="btn btn-danger btn-lg">
			            <Link
							style={{
								textDecoration: 'none',
								color:'white'
							}}
							to='/womeneyeglasses'>
							Explore Women Eyeglasses
							</Link>
			            </button>
			        </div>

			        </div>

			        <div style={{marginTop: '100px'}}>
			        <div className="row">
			            <div className=" col-sm-12 ">
			            <h3 className="text-center">Sunglasses for Men</h3>
			            <div className="row justify-content-center">
			                <p className="d-inline text-center">UV Protected |</p>
			                <p className="d-inline text-center">Gradient Tinted |</p>
			                <p className="d-inline text-center">Polarized Filters</p>
			            </div>
			            </div>
			        </div>

			        <div className="products">
			            <div className="row">
			            <div className="offset-md-2"></div>
			            <div className="col-md-2">
			            {this.state.home13.map(item => (
			                <Link to="/tomford711"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Men/Thumbnail-711-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name13}</span>
			                    <span className="d-block text-center">Rs {item.price13}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home14.map(item => (
			                <Link href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Men/Thumbnail-tm9350-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name14}</span>
			                    <span className="d-block text-center">Rs {item.price14}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			                {this.state.home15.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Men/Thumbnail-211-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name15}</span>
			                    <span className="d-block text-center">Rs {item.price15}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home16.map(item => (
			                <Link to="/tomford630"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Men/Thumbnail-0630-tortoise-360x160.jpg"
			                />

			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name16}</span>
			                    <span className="d-block text-center">Rs {item.price16}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="offset-md-2"></div>
			            </div>
			        </div>

			        <div className="row justify-content-center">
			            <button style={{marginTop: '40px'}} className="btn btn-danger btn-lg">
			            <Link
							style={{
								textDecoration: 'none',
								color:'white'
							}}
							to='/mensunglasses'>
							Explore Men Sunglasses
							</Link>
			            </button>
			        </div>

			        </div>

			        <div style={{marginTop: '100px'}}>
			        <div className="row">
			            <div className=" col-sm-12 ">
			            <h3 className="text-center">Sunglasses for Women</h3>
			            <div className="row justify-content-center">
			                <p className="d-inline text-center">Stylish Collection |</p>
			                <p className="d-inline text-center">Mirrored Designs |</p>
			                <p className="d-inline text-center">UV Protection</p>
			            </div>
			            </div>
			        </div>

			        <div className="products">
			            <div className="row">
			            <div className="offset-md-2"></div>
			            <div className="col-md-2">
			            {this.state.home17.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Women/Thumbnail-613-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name17}</span>
			                    <span className="d-block text-center">Rs {item.price17}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home18.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Women/Thumbnail-tm-475-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name18}</span>
			                    <span className="d-block text-center">Rs {item.price18}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home19.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Women/Thumbnail-711-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name19}</span>
			                    <span className="d-block text-center">Rs {item.price19}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home20.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Sunglasses for Women/Thumbnail-430-360x160.jpg"
			                />

			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name20}</span>
			                    <span className="d-block text-center">Rs {item.price20}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="offset-md-2"></div>
			            </div>
			        </div>

			        <div className="row justify-content-center">
			            <button style={{marginTop: '40px'}} className="btn btn-danger btn-lg">
			            <Link
							style={{
								textDecoration: 'none',
								color:'white'
							}}
							to='/womensunglasses'>
							Explore Women Sunglasses
							</Link>
			            </button>
			        </div>

			        </div>

			        <div style={{marginTop: '100px'}}>
			        <div className="row">
			            <div className=" col-sm-12 ">
			            <h3 className="text-center">Contact Lenses</h3>
			            <div className="row justify-content-center">
			                <p className="d-inline text-center">Best Selling Brand |</p>
			                <p className="d-inline text-center">All 6 Collections |</p>
			                <p className="d-inline text-center">
			                Most Trending Coloured Eye Lenses
			                </p>
			            </div>
			            </div>
			        </div>

			        <div className="products">
			            <div className="row">
			            <div className="offset-md-2"></div>
			            <div className="col-md-2">
			            {this.state.home21.map(item => (
			                <Link to="/onedaybella"
			                ><img
			                    className="img-fluid"
			                    src="images/Bella Contact Lenses/Thumbnail-Bella-Oneday-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name21}</span>
			                    <span className="d-block text-center">Rs {item.price21}</span>
			                    </div>
			                </div>
			                </Link>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home22.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Bella Contact Lenses/Thumbnail-Bella-Natural-Copy-5.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name22}</span>
			                    <span className="d-block text-center">Rs {item.price22}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home23.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Bella Contact Lenses/Thumbnail-Bella-Elite-Copy-3-360x160.jpg"
			                />
			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name23}</span>
			                    <span className="d-block text-center">Rs {item.price23}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="col-md-2">
			            {this.state.home24.map(item => (
			                <a href="#"
			                ><img
			                    className="img-fluid"
			                    src="images/Bella Contact Lenses/Thumbnail-Bella-Diamond-360x160.jpg"
			                />

			                <div className="row">
			                    <div className="col-md-12 col-sm-12">
			                    <span className="d-block text-center">{item.name24}</span>
			                    <span className="d-block text-center">Rs {item.price24}</span>
			                    </div>
			                </div>
			                </a>
			                ))}
			            </div>
			            <div className="offset-md-2"></div>
			            </div>
			        </div>

			        <div className="row justify-content-center">
			            <button style={{marginTop: '40px', marginBottom:'5px'}} className="btn btn-danger btn-lg">
			            <Link
							style={{
								textDecoration: 'none',
								color:'white'
							}}
							to='/contactlenses'>
							Explore Bella Contact Lenses
							</Link>
			            </button>
			        </div>
			        </div>
		
					<Footer />
				</div>
			</div>
		);
	}
}



export default Home;
