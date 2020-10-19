import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

/*browserrouter*/

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';
/*browserrouter*/

//Components
import Home from './Home';

import Sunglasses from './Sunglasses';
import Men_Sunglasses from './Men Sunglasses';
import Women_Sunglasses from './Women Sunglasses';

import Eyeglasses from './Eyeglasses';
import Men_Eyeglasses from './Men Eyeglasses';
import Women_Eyeglasses from './Women Eyeglasses';

import Premium from './Premium';
import Premium_Men_Eyeglasses from './Premium Men Eyeglasses';
import Premium_Women_Eyeglasses from './Premium Women Eyeglasses';

import Contact_Lenses from './Contact Lenses';
import Transition_Lenses from './Transition Lenses';
import Bifocal_Lenses from './Bifocal Lenses';
import Progressive_Lenses from './Progressive Lenses';

import { Cart } from './Cart';

import Vendor_Carousel from './Vendor Carousel';
import Gaba_Optical from './Gaba Optical';
import Optec from './Optec';
import Vision_Express from './Vision Express';
import Opticraft from './Opticraft';

import TOM_FORD_452 from './Products/TOM_FORD_452';
import TOM_FORD_711 from './Products/TOM_FORD_711';
import NIKE_5532 from './Products/Nike 5532';
import Moscot from './Products/Moscot';
import One_day_bella from './Products/One day bella';
import Round_Gold_Brown from './Products/Round Gold Brown';
import Tom_Ford_630 from './Products/Tom_Ford_630';
import Moscot_Lemtosh from './Products/Moscot_Lemtosh';
import Moscot_Vilda from './Products/Moscot_Vilda';
import Police_8560 from './Products/Police8560';
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
import Facebook from './Facebook Login';
import Google from './components/Google';
import Stripe_TOM_FORD_711 from './Stripe Products/Stripe_TOM_FORD_711';
import Google_User_Login from './Google User Login';

ReactDOM.render(
	<Router>
		<Route path='/' component={Navigation}></Route>
		{/* <Route path='/facebookuserlogin' component={Facebook_User_Login}></Route> */}
		<Route path='/googleuserlogin' component={Google_User_Login}></Route>

		<Route exact path='/login' component={Login}></Route>
		<Route exact path='/facebooklogin' component={Facebook}></Route>
		<Route exact path='/googlelogin' component={Google}></Route>

		{/*---------------Stripe Products--------------*/}
		<Route
			exact
			path='/stripetomford711'
			component={Stripe_TOM_FORD_711}
		></Route>

		<Route exact path='/cart' component={Cart}></Route>

		{/*---------------Products--------------*/}
		<Route exact path='/' component={Home}></Route>
		<Route exact path='/tomford452' component={TOM_FORD_452}></Route>
		<Route exact path='/nike5532' component={NIKE_5532}></Route>
		<Route exact path='/roundbrowngold' component={Round_Gold_Brown}></Route>
		<Route exact path='/tomford630' component={Tom_Ford_630}></Route>
		<Route exact path='/tomford58' component={TOM_FORD_58}></Route>
		<Route exact path='/tomford711' component={TOM_FORD_711}></Route>
		<Route exact path='/tomford211' component={TOM_FORD_211}></Route>
		<Route exact path='/diesel7963' component={Diesel_7963}></Route>
		<Route exact path='/karenwalker' component={Karen_Walker}></Route>
		<Route exact path='/holidaypurple' component={Holiday_Purple}></Route>
		<Route exact path='/dusk' component={Dusk}></Route>
		<Route exact path='/wayfarer2140' component={Wayfarer_2140}></Route>
		<Route exact path='/round1523blue' component={Round_1523_Blue}></Route>
		<Route exact path='/round1523red' component={Round_1523_Red}></Route>

		<Route exact path='/moscot' component={Moscot}></Route>
		<Route exact path='/moscotlemtosh' component={Moscot_Lemtosh}></Route>
		<Route exact path='/moscotvilda' component={Moscot_Vilda}></Route>
		<Route exact path='/police8560' component={Police_8560}></Route>

		<Route exact path='/onedaybella' component={One_day_bella}></Route>
		{/*---------------End Products--------------*/}

		{/* <Route exact path='/' component={Vendor_Carousel}></Route> */}
		<Route exact path='/gabaoptical' component={Gaba_Optical}></Route>
		<Route exact path='/optec' component={Optec}></Route>
		<Route exact path='/visionexpress' component={Vision_Express}></Route>
		<Route exact path='/opticraft' component={Opticraft}></Route>

		<Route exact path='/eyeglasses' component={Eyeglasses}></Route>
		<Route exact path='/meneyeglasses' component={Men_Eyeglasses}></Route>
		<Route exact path='/womeneyeglasses' component={Women_Eyeglasses}></Route>

		<Route exact path='/sunglasses' component={Sunglasses}></Route>
		<Route exact path='/mensunglasses' component={Men_Sunglasses}></Route>
		<Route exact path='/womensunglasses' component={Women_Sunglasses}></Route>

		<Route exact path='/premium' component={Premium}></Route>
		<Route
			exact
			path='/premiummeneyeglasses'
			component={Premium_Men_Eyeglasses}
		></Route>
		<Route
			exact
			path='/premiumwomeneyeglasses'
			component={Premium_Women_Eyeglasses}
		></Route>

		<Route exact path='/contactlenses' component={Contact_Lenses}></Route>
		<Route exact path='/transitionlenses' component={Transition_Lenses}></Route>
		<Route exact path='/bifocallenses' component={Bifocal_Lenses}></Route>
		<Route
			exact
			path='/progressivelenses'
			component={Progressive_Lenses}
		></Route>
	</Router>,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
