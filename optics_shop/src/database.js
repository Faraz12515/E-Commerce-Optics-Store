const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
	MongoClient.connect(
		'mongodb+srv://faraz:faraz123@optics-store-bebfk.mongodb.net/test?retryWrites=true&w=majority'
	)
		.then(client => {
			console.log('Connected');
			callback(client);
		})
		.catch(err => {
			console.log(err);
		});
};

module.exports = mongoConnect;
