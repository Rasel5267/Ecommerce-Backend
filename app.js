require('dotenv').config()
const express = require('express');
const dbConnection = require('./services/Database');

dbConnection();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.send("Working...")
})

app.listen( process.env.PORT || 8000, () => {
	console.log(`App is listening on port ${process.env.PORT}`);
})