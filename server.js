// const express = require('express');
// const mongoose = require('mongoose');

// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

// const app = express();

// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// app.get('/', (req, res) => res.send('Hello World'));

// // Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));

/*,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,*/
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const passport = require('passport');

// const cors = require('cors');
// const stripe = require('stripe')('sk_test_2nix1T6Pvx2nxvIpTdk5IULd00W1sLJgE7');
// const uuid = require('uuid/v4');

// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

// const app = express();

// //strip
// app.use(cors());

// ///strip api
// app.post('/checkout', async (req, res) => {
// 	console.log('Request:', req.body);

// 	let error;
// 	let status;
// 	try {
// 		const { product, token } = req.body;

// 		const customer = await stripe.customers.create({
// 			email: token.email,
// 			source: token.id
// 		});

// 		const idempotency_key = uuid();
// 		const charge = await stripe.charges.create(
// 			{
// 				amount: product.price * 100,
// 				currency: 'usd',
// 				customer: customer.id,
// 				receipt_email: token.email,
// 				description: `Purchased the ${product.name}`,
// 				shipping: {
// 					name: token.card.name,
// 					address: {
// 						line1: token.card.address_line1,
// 						line2: token.card.address_line2,
// 						city: token.card.address_city,
// 						country: token.card.address_country,
// 						postal_code: token.card.address_zip
// 					}
// 				}
// 			},
// 			{
// 				idempotency_key
// 			}
// 		);
// 		console.log('Charge:', { charge });
// 		status = 'success';
// 	} catch (error) {
// 		console.error('Error:', error);
// 		status = 'failure';
// 	}

// 	res.json({ error, status });
// });

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // DB Config
// const db = require('./config/keys').mongoURI;

// // Connect to MongoDB
// mongoose
// 	.connect(db, {
// 		useUnifiedTopology: true,
// 		useNewUrlParser: true
// 	})
// 	.then(() => console.log('MongoDB Connected'));

// // Passport middleware
// app.use(passport.initialize());

// // Passport Config
// require('./config/passport')(passport);

// // Use Routes
// app.use('/api/users', users);
// app.use('/api/profile', profile);
// app.use('/api/posts', posts);

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const stripe = require('stripe')('sk_test_2nix1T6Pvx2nxvIpTdk5IULd00W1sLJgE7');
const uuid = require('uuid/v4');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//strip
app.use(cors());

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//======DB config=======//
const db = require('./config/keys').mongoURI;

//=====DB connection=====//
mongoose
	.connect(db, {
		useUnifiedTopology: true,
		useNewUrlParser: true
	})
	.then(() => console.log('MongoDB Connected'));

app.get('/', (req, res) => {
	res.send('hello');
});

// //passport middleware
// app.use(passport.initialize());

// //passport config
// require('./config/passport')(passport);

///strip api
app.post('/checkout', async (req, res) => {
	console.log('Request:', req.body);

	let error;
	let status;
	try {
		const { product, token } = req.body;

		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id
		});

		const idempotency_key = uuid();
		const charge = await stripe.charges.create(
			{
				amount: product.price * 100,
				currency: 'usd',
				customer: customer.id,
				receipt_email: token.email,
				description: `Purchased the ${product.name}`,
				shipping: {
					name: token.card.name,
					address: {
						line1: token.card.address_line1,
						line2: token.card.address_line2,
						city: token.card.address_city,
						country: token.card.address_country,
						postal_code: token.card.address_zip
					}
				}
			},
			{
				idempotency_key
			}
		);
		console.log('Charge:', { charge });
		status = 'success';
	} catch (error) {
		console.error('Error:', error);
		status = 'failure';
	}

	res.json({ error, status });
});

// app.post("/checkout", async (req, res) => {

//     let error;
//     let status;
//     try {
//       const {  token } = req.body;
//       console.log("try -- >  " , token.id , token.email);
//       const customer = await stripe.customers.create({
//         email: req.body.email,
//         source: req.body.id
//       });

//       const idempotencykey = uuid();
//       const charge = await stripe.charges.create(

//         {
//             amount:  100,
//             currency: "usd",
//             customer: customer.id,
//             receipt_email: token.email,
//             description: `Purchased the`,
//             shipping: {
//               name: token.card.name,
//               address: {
//                 line1: token.card.address_line1,
//                 line2: token.card.address_line2,
//                 city: token.card.address_city,
//                 country: token.card.address_country,
//                 postal_code: token.card.address_zip
//               }
//             }
//           },
//           {
//             idempotencykey
//           },
//           (err , charge )=>{
//               if(!err){
//                 console.log("Charge:", { charge });
//                 status = "success";
//               }
//              else{
//                  console.log('fuck off')
//              }
//           }
//       );

//     } catch (error) {
//       console.error("Error:", error);
//       status = "failure";
//     }

//     res.json({ error, status });
//   });

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
