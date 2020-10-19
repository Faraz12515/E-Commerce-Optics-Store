import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Footer } from './Footer';

class Opticraft extends Component {


  constructor(props) {
		super(props);

		this.state = {
			womensunglasses1: [
				{
					key: 0,
					name1: 'WAYFARER RB 2140 LARGE',
					name2: 'ROUND 1523 BLUE',
					name3: 'ROUND 1523 RED',
					name4: 'ROUND 1523 TORTOISE',
					price1: 4000,
					price2: 1600,
					price3: 1500,
					price4: 1500
				}
			],

			womensunglasses2: [
				{
					key: 1,
					name1: 'ROUND 8729 BLUE TINT',
					name2: 'GENTLE MONSTER',
					name3: 'CARAVAN 3477',
					name4: 'RAY BAN AVIATOR',
					price1: 1500,
					price2: 2500,
					price3: 2200,
					price4: 1800
				}
			],

			womensunglasses3: [
				{
					key: 2,
					name1: 'BALIMAIN',
					name2: 'CAT EYE 8090 BLACK',
					name3: 'CAT EYE 8090',
					name4: 'CAT EYE 8416',
					price1: 4500,
					price2: 1300,
					price3: 1300,
					price4: 1300
				}
			],

			womensunglasses4: [
				{
					key: 3,
					name1: 'CAT EYE 8461',
					name2: 'CLUBMASTER',
					name3: 'RB 3016 POLARIZED',
					name4: 'DITA FLIGHT 006',
					price1: 1300,
					price2: 3500,
					price3: 4500,
					price4: 6500
				}
			],

			womensunglasses5: [
				{
					key: 4,
					name1: 'DOLICE AND GABBANA 4332',
					name2: 'CARTEL BROWN',
					name3: 'HEXAGONAL 3548',
					name4: 'HEXAGONAL 88210',
					price1: 5000,
					price2: 1600,
					price3: 1800,
					price4: 1500
				}
			],

			womensunglasses6: [
				{
					key: 5,
					name1: 'MOSCOT LEMTOSH SUN',
					name2: 'OCTAGONAL',
					name3: 'OLIVER PEOPLES',
					name4: 'ROUND 87290',
					price1: 4000,
					price2: 1200,
					price3: 4500,
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
        <img style={{width: '-webkit-fill-available'}} className="img-fluid" src="images/Header/women sunglasses.png" />
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'black'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Opticraft</h1>
							<h5 style={{ textTransform: 'uppercase' }}>Opticraft provides trendy and best<br/> sunglasses collection for womens</h5>
						</div>
					</div>
    
    
    
    <div className="row justify-content-center bg-secondary text-white">
      <div className="col-sm-12 justify-content-center">
        <p className="text-center mt-2 mb-1">
          Embrace the summers with grace like never before! Makes a style
        </p>
        <p className="text-center mb-1">
          statement with our women's designer sunglasses.Add a little more flair
        </p>
        <p className="text-center mb-2">
          to your look and enjoy the sylish vision that's crystal clear.
        </p>
      </div>
    
    </div>
    


    {this.state.womensunglasses1.map(item => (
    <div style={{ marginTop: '50px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <Link to='/wayfarer2140'
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnai-Wayfarer-2140-large.jpg"
            />
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <span className="d-block text-center">{item.name1}</span>
                <span className="d-block text-center">Rs {item.price1}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/round1523blue"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-1-Round-1523-Blue.jpg"
            />
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <span className="d-block text-center">{item.name2}</span>
                <span className="d-block text-center">Rs {item.price2}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="/round1523red"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-1-Round-1523-Pink-1-1.jpg"
            />
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <span className="d-block text-center">{item.name3}</span>
                <span className="d-block text-center">Rs {item.price3}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-1-Round-1523-Tortoise-1.jpg"
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

    {this.state.womensunglasses2.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-1-Round-Gray.jpg"

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
              src="images/Women Sunglasses/Thumbnail-1-The-Derma-Black.jpg"
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
              src="images/Women Sunglasses/Thumbnail-3477-Gold-Brown-360x160 (1).jpg"
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
              src="images/Women Sunglasses/Thumbnail-Aviator-Gold-Green-360x160.jpg"
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
    
    {this.state.womensunglasses3.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-Balmian-6003-360x160.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Cat-Eye-8090-Black (1).jpg"
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
              src="images/Women Sunglasses/Thumbnail-Cat-Eye-8090-Brown.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Cat-Eye-8416-Brown.jpg"
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

    {this.state.womensunglasses4.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-Cat-Eye-8461-Pink.jpg"
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
              src="images/Women Sunglasses/Thumbnail-club-master-Black-silver-360x160.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Clubmaster-RB3016-Tortoise.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Dita-Flight-006-Black-Gold-360x160.jpg"
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
    
    {this.state.womensunglasses5.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-DolceGabbana-4332-Black--360x160 (1).jpg"
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
              src="images/Women Sunglasses/Thumbnail-Gucci-282-Brown-360x160.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Hexagonal-3548-Black- (1).jpg"
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
              src="images/Women Sunglasses/Thumbnail-Hexagonal-88210-Black.jpg"
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
    
    {this.state.womensunglasses6.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Sunglasses/Thumbnail-Moscot-Sunglasses.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Octagonal-360x160.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Oliver-reoples-5310-360x160.jpg"
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
              src="images/Women Sunglasses/Thumbnail-Round-87290-Gold (1).jpg"
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

export default Opticraft;
