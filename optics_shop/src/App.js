import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';

/*-----------------Components----------------------*/

import Navigation from './Navigation';
import Home from './Home';
import Bifocal_Lenses from './Bifocal Lenses';
import Contact_Lenses from './Contact Lenses';
import Eyeglasses from './Eyeglasses';
import Men_Eyeglasses from './Men Eyeglasses';
import Men_Sunglasses from './Men Sunglasses';
import Premium_Men_Eyeglasses from './Premium Men Eyeglasses';
import Premium_Women_Eyeglasses from './Premium Women Eyeglasses';
import Premium from './Premium';
import Progressive_Lenses from './Progressive Lenses';
import Sunglasses from './Sunglasses';
import Transition_Lenses from './Transition Lenses';
import Women_Eyeglasses from './Women Eyeglasses';
import Women_Sunglasses from './Women Sunglasses';
import TOM_FORD_452 from './Products/TOM_FORD_452';
import { Cart } from './Cart';
import { Footer } from './Footer';
import Products from './Products';
import Vendor_Carousel from './Vendor Carousel';
import NIKE_5532 from './Products/Nike 5532';
import Moscot from './Products/Moscot';
import Moscot_Lemtosh from './Products/Moscot_Lemtosh';
import Moscot_Vilda from './Products/Moscot_Vilda';
import One_day_bella from './Products/One day bella';
import Round_Gold_Brown from './Products/Round Gold Brown';
import Tom_Ford_630 from './Products/Tom_Ford_630';
import Police_8560 from './Products/Police8560';
import Related_Products from './Related Products';
import TOM_FORD_58 from './Products/TOM_FORD_58';
import TOM_FORD_211 from './Products/TOM_FORD_211';
import Diesel_7963 from './Products/Diesel 7963';
import Karen_Walker from './Products/Karen Walker';
import Holiday_Purple from './Products/Holiday Purple';
import Dusk from './Products/Dusk';
import Wayfarer_2140 from './Products/Wayfarer 2140';
import Round_1523_Blue from './Products/Round 1523 Blue';
import Round_1523_Red from './Products/Round 1523 Red';
import Login from './Login';
import Facebook from './components/Facebook';
import Stripe_TOM_FORD_711 from './Stripe Products/Stripe_TOM_FORD_711';
import Google from './components/Google';
import Google_User_Login from './Google User Login';

function App() {
	return (
		<div className='App'>
			{/*-----------------Components--------------------*/}
			<Home />
			<Login />
			<Google />
			<Facebook />

			<Google_User_Login />

			<Cart />
			<Footer />

			<Products />
			<Vendor_Carousel />
			<Related_Products />

			{/*---------Stripe Products---------*/}
			<Stripe_TOM_FORD_711 />

			{/*---------Products---------*/}
			<TOM_FORD_452 />
			<NIKE_5532 />
			<Moscot />
			<Moscot_Lemtosh />
			<Moscot_Vilda />
			<Police_8560 />
			<Round_Gold_Brown />
			<TOM_FORD_58 />
			<TOM_FORD_211 />
			<Diesel_7963 />
			<Tom_Ford_630 />
			<Karen_Walker />
			<Holiday_Purple />
			<Dusk />
			<Wayfarer_2140 />
			<Round_1523_Blue />
			<Round_1523_Red />
			<One_day_bella />
			{/*---------Products---------*/}
			<Bifocal_Lenses />
			<Contact_Lenses />
			<Eyeglasses />
			<Men_Eyeglasses />
			<Men_Sunglasses />
			<Premium_Men_Eyeglasses />
			<Premium_Women_Eyeglasses />
			<Premium />
			<Progressive_Lenses />
			<Sunglasses />
			<Transition_Lenses />
			<Women_Eyeglasses />
			<Women_Sunglasses />
		</div>
	);
}

export default App;
