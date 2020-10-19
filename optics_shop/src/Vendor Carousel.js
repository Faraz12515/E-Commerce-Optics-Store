import React, { Component } from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

class Vendor_Carousel extends Component {
	render() {
		return (
			<div>
				<div className='container'>
					<h2 className='text-center'>
						<span style={{ borderBottom: '2px solid red', color: 'black' }}>
							Visit Our Vendors Shop
						</span>
					</h2>
					<div className='row'>
						<div
							className='col-md-3  mt-2'
							style={{ marginRight: '12px', marginLeft: '-22px' }}
						>
							<Card
								className='card'
								bg='danger'
								border='light'
								text='white'
								style={{ width: '18rem' }}
							>
								<Card.Img variant='top' src='./images/vendors/7.jpg' />
								<Card.Body>
									<Card.Title>GABA Optical</Card.Title>
									<Card.Text>
										Afzal Appartments, National Stadium Road, Karachi.
									</Card.Text>
									<Button variant='light'>
										<Link
											style={{
												textDecoration: 'none',
												color: 'red'
											}}
											to='/gabaoptical'
										>
											Visit Shop
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</div>

						<div
							className='col-md-3   mt-4'
							style={{ marginLeft: '2px', marginRight: '38px' }}
						>
							<Card className='card' border='danger' style={{ width: '18rem' }}>
								<Card.Img variant='top' src='./images/vendors/2.jpg' />
								<Card.Body>
									<Card.Title>Opticraft</Card.Title>
									<Card.Text>
										Uzma Arcade, Shop No.6 Main Clifton Road, Karachi.
									</Card.Text>
									<Button variant='danger'>
										<Link
											style={{
												textDecoration: 'none',
												color: 'white'
											}}
											to='/opticraft'
										>
											Visit Shop
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</div>
						<div
							className='col-md-3  mt-4 '
							style={{ marginRight: '-25px', marginLeft: '-28px' }}
						>
							<Card
								className='card'
								bg='danger'
								border='light'
								text='white'
								style={{ width: '18rem' }}
							>
								<Card.Img variant='top' src='./images/vendors/1.jpg' />
								<Card.Body>
									<Card.Title>Optec</Card.Title>
									<Card.Text>
										Dean Arcade, Khayaban-e-Iqbal Road, Karachi.
									</Card.Text>
									<Button variant='light'>
										<Link
											style={{
												textDecoration: 'none',
												color: 'red'
											}}
											to='/optec'
										>
											Visit Shop
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</div>
						<div
							className='col-md-3  mt-2'
							style={{ marginLeft: 'auto', marginRight: '-16px' }}
						>
							<Card className='card' border='danger' style={{ width: '18rem' }}>
								<Card.Img variant='top' src='./images/vendors/3.jpg' />
								<Card.Body>
									<Card.Title>Vision Express</Card.Title>
									<Card.Text>
										Contact Lenses supplier St, Badar Commercial Area,DHA 5,
										Karachi.
									</Card.Text>
									<Button variant='danger'>
										<Link
											style={{
												textDecoration: 'none',
												color: 'white'
											}}
											to='/visionexpress'
										>
											Visit Shop
										</Link>
									</Button>
								</Card.Body>
							</Card>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Vendor_Carousel;
