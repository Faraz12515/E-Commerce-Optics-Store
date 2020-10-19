import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Footer } from './Footer';

class Vision_Express extends Component {

  constructor(props) {
		super(props);

		this.state = {
			womeneyeglasses1: [
				{
					key: 0,
					name1: 'MATTE 3145',
					name2: 'MATTE 3146',
					name3: 'AVIATOR OVERSIZE',
					name4: 'MATTE 6135',
					price1: 1000,
					price2: 1200,
					price3: 1500,
					price4: 1200
				}
			],

			womeneyeglasses2: [
				{
					key: 1,
					name1: 'VICTORY 939',
					name2: 'CAT EYE 3144',
					name3: 'CAT EYE 6211',
					name4: 'CHANEL 2185',
					price1: 1000,
					price2: 1200,
					price3: 800,
					price4: 2500
				}
			],

			womeneyeglasses3: [
				{
					key: 2,
					name1: 'CLUB 2092',
					name2: 'D&G 4556',
					name3: 'D&G 45560',
					name4: 'PRADA 1123 BROWN',
					price1: 800,
					price2: 4000,
					price3: 4000,
					price4: 1500
				}
			],

			womeneyeglasses4: [
				{
					key: 3,
					name1: 'ROUND 18010',
					name2: 'HEXAGONAL 2513',
					name3: 'ROUND 5813',
					name4: 'ROUND 5826',
					price1: 1400,
					price2: 900,
					price3: 1200,
					price4: 1200
				}
			],

			womeneyeglasses5: [
				{
					key: 4,
					name1: 'ROUND 5826 PINK',
					name2: 'CAT EYE 1254',
					name3: 'FILA 006 GOLD',
					name4: 'OCTAGONAL 3050',
					price1: 1200,
					price2: 1000,
					price3: 1000,
					price4: 1200
				}
			],

			womeneyeglasses6: [
				{
					key: 5,
					name1: 'RIM LESS 8801',
					name2: 'RIM LESS 8806',
					name3: 'HEXAGONAL 8821',
					name4: 'ROUND 8729',
					price1: 1200,
					price2: 1200,
					price3: 1200,
					price4: 1200
				}
			]
		};
	}




	render() {
		return (
			<div>
				<div style={{ overflowX: 'hidden' }}>
          
        <div>
        <img className="img-fluid" src="images/Header/Women-EyeGlasses-1-1.jpg" />
						<div
							class='text-wrapper'
							style={{
								position: 'absolute',
								marginLeft: '75px',
								top: '160px',
								color: 'white'
							}}
						>
							<h1 style={{ textTransform: 'uppercase' }}>Vision Express</h1>
							<h5 style={{ textTransform: 'uppercase' }}>Wide range of Men and Women Eyeglasses and Frames</h5>
						</div>
					</div>
            
    
    
    <div className="row justify-content-center bg-secondary text-white">
      <div className="col-sm-12 justify-content-center">
        <p className="text-center mt-2 mb-1">
          Make a glamorous statement with our wide range of eyeglasses frames for men and women.
        </p>
        <p className="text-center mb-1">
          One place for all the top brands, hot trends and exclusive eyewear styles.
        </p>
        <p className="text-center mb-2">
          Find the perfect eyeglasses that enhance your look.
        </p>
      </div>
    
    </div>
    

    {this.state.womeneyeglasses1.map(item => (
    <div style={{ marginTop: '50px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-1-3145-Black-.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-3146-Black-.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-5349-Pink-.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-6135-Black-.jpg"
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

   {this.state.womeneyeglasses2.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-1-939-Black.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Cat-Eye-3144-Brown.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Cat-Eye-6211-Black-.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Chanel-2185-Black.jpg"
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

   {this.state.womeneyeglasses3.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-1-Club-2092-Black-Gold.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-DnG-4546-Black-Gold.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-DnG-45460-Red.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Prada-1123-Brown-.jpg"
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

{this.state.womeneyeglasses4.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-1-Round-18010-Grey.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Round-2513-Black-.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Round-5813-Tortoise.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-1-Round-5826-Black-Gold-1.jpg"
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

{this.state.womeneyeglasses5.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-1-Round-5826-Pink.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Cat-Eye-1254-Blue.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Fila-006-Gold.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Octagonal-3050.jpg"
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

{this.state.womeneyeglasses6.map(item => (
    <div style={{ marginTop: '20px' }} className="products">
      <div className="row">
        <div className="offset-md-2"></div>
        <div className="col-md-2">
          <a href="#"
            ><img
              className="img-fluid"
              src="images/Women Eyeglasses/Thumbnail-Rim-Less-8801-Black-Red.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Rim-Less-8805-Grey.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Round-8221-Black-Gold-1.jpg"
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
              src="images/Women Eyeglasses/Thumbnail-Round-8729-Gold.jpg"
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

export default Vision_Express;
