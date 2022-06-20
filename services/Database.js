const mongoose = require('mongoose');

const URL = process.env.MONGO_URI;

const dbConnection = async () => {
	try {
		mongoose.connect(URL).then(result => {
			if(result){
				console.log('DB Connected')
			}
		})
	} catch (error) {
		console.log(error)
	}
}

module.exports = dbConnection;