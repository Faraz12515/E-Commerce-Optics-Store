import React, { Component } from 'react';
import { Footer } from './Footer';

class Men_Eyeglasses extends Component {

    constructor(props) {
		super(props);

		this.state = {
			meneyeglasses1: [
				{
					key: 0,
					name1: '12195',
					name2: '12198',
					name3: '2133',
					name4: '2133 ablue',
					price1: 2700,
					price2: 2600,
					price3: 2800,
					price4: 2800
				}
            ],
            
			meneyeglasses2: [
				{
					key: 1,
					name1: 'HUGO BOSS 6499',
					name2: '1066',
					name3: 'TOM FORD 5176',
					name4: 'CARTIER 2301',
					price1: 2800,
					price2: 2800,
					price3: 4000,
					price4: 3000
				}
            ],
            
			meneyeglasses3: [
				{
					key: 2,
					name1: 'RIMLESS 0008',
					name2: 'CARTIER 2278',
					name3: '2284',
					name4: 'MOSCOT VILDA',
					price1: 3000,
					price2: 3000,
					price3: 3000,
					price4: 4000
				}
            ],
            
			meneyeglasses4: [
				{
					key: 3,
					name1: 'MOSCOT LEMTOSH',
					name2: 'MOSCOT MILTZEN',
					name3: 'MOSCOT',
					name4: 'POLICE 8560',
					price1: 3500,
					price2: 3500,
					price3: 3500,
					price4: 2600
				}
            ],
            
			meneyeglasses5:[
				{
					key: 4,
					name1: 'POLICE 570',
					name2: 'RIMLESS 7048',
					name3: 'SILHOUETTE 12205',
					name4: 'SILHOUETTE 12157',
					price1: 2800,
					price2: 3000,
					price3: 3000,
					price4: 3000
				}
            ],
            
			meneyeglasses6:[
				{
					key: 5,
					name1: 'TOM FORD 5176',
					name2: 'TOM FORD 590',
					name3: 'TOM FORD 591',
					name4: 'TOM FORD 657',
					price1: 4000,
					price2: 4000,
					price3: 4000,
					price4: 3000
				}
			]
		};
	}


	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>

                <div>
                <img className="img-fluid" src="images/Header/Men-Eyeglasses-1.jpg" />
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'black'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Men Eyeglasses</h1>
						</div>
					</div>
            
            
            <div className="row justify-content-center bg-secondary text-white">
            <div className="col-sm-12 justify-content-center">
                <p className="text-center mt-2 mb-1">
                Never compromise on yoyr style, our latest men's eyeglasses will 
                </p>
                <p className="text-center mb-1">
                help you stay ahead of the game. We offer a wide range of frames
                </p>
                <p className="text-center mb-1">
                for men according to classNameic styles, new looks, and the latest
                </p>
                <p className="text-center mb-2">
                trends.
                </p>
            </div>
            
            </div>
            

            {this.state.meneyeglasses1.map(item => (    
                <div  style={{ marginTop: '50px' }} className="products">
                <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-12148-Black-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-12195-brown-gold-1-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-20133-Brown-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-2133-Blue-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>  
            ))}
            
            {this.state.meneyeglasses2.map(item => (
            <div  style={{ marginTop: '20px' }} className="products">
            <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-6499-Black-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-660J-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-9046-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-Black-Brown-2301-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>
            ))}
            
            {this.state.meneyeglasses3.map(item => (
            <div  style={{ marginTop: '20px' }} className="products">
            <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-black-grey-0008-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-Black-Silver-2278-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-Gold-Silver-2284-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-moscot-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>
            ))}

            {this.state.meneyeglasses4.map(item => (
            <div  style={{ marginTop: '20px' }} className="products">
            <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-moscot-lemtosh-medium-black-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-Moscot-Miltzen-Tortoise-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-moscot1-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-police-8560-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>
            ))}
            
            {this.state.meneyeglasses5.map(item => (
            <div  style={{ marginTop: '20px' }} className="products">
            <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-police-brown-570-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-rayban-7048-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-silhouette-12205-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-silloutte-12157-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>
            ))}
            
            {this.state.meneyeglasses6.map(item => (
            <div  style={{ marginTop: '20px' }} className="products">
            <div className="row">
                <div className="offset-md-2"></div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-tom-ford-5176-black-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name1}</span>
                        <span className="d-block text-center">Rs {item.price1}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-tomford-590-Black-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name2}</span>
                        <span className="d-block text-center">Rs {item.price2}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-Tomford-591-360x160.jpg"
                    />
                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name3}</span>
                        <span className="d-block text-center">Rs {item.price3}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="col-md-2">
                <a href="#"
                    ><img
                    className="img-fluid"
                    src="images/Men Eyeglasses/Thumbnail-tomfor-657-360x160.jpg"
                    />

                    <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <span className="d-block text-center">{item.name4}</span>
                        <span className="d-block text-center">Rs {item.price4}</span>
                    </div>
                    </div>
                </a>
                </div>
                <div className="offset-md-2"></div>
            </div>
            </div>
            ))}
                </div>
                <Footer/>
            </div>
		);
	}
}

export default Men_Eyeglasses;
