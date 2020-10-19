const express = require('express');
const stripe = require('stripe')(
	'sk_test_2nix1T6Pvx2nxvIpTdk5IULd00W1sLJgE7'
);
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const StripePayment = express();

//Handlebars Middleware
StripePayment.engine('handlebars', exphbs({ defaultLayout: 'main' }));
StripePayment.set('view engine', 'handlebars');

//Body Parser Middleware
StripePayment.use(bodyParser.json());
StripePayment.use(bodyParser.urlencoded({ extended: false }));

//Set Static Folder
StripePayment.use(express.static('${_dirname}/public'));

//Index Route
StripePayment.get('/', (req, res) => {
	res.render('index');
});

//Success Route
StripePayment.get('/success', (req, res) => {
	res.render('success');
});

//Charge Route
StripePayment.post('/charge', (req, res) => {
	const amount = 2500;

	stripe.customers
		.create({
			email: req.body.stripeEmail,
			source: req.body.stripeToken
		})
		.then(customer =>
		stripe.charges.create({
				amount,
				description: 'Web Development Ebook',
				currency: 'usd',
				customer: customer.id
			})
		)
		.then(charge => res.render('success'));
});

const port = process.env.PORT || 3000;

StripePayment.listen(port, () => {
	console.log('Server started on port ${port}');
});