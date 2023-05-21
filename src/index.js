const mongoose = require('mongoose');
const User = require('./Models/User');
const express = require('express')
const userRoutes = require('./routes/user_routes')
const adminRoutes = require('./routes/admin_routes')
const publicRoutes = require('./routes/public_routes')
main().catch(err => console.log(err));

async function main() {
	const dbUrl = 'mongodb://127.0.0.1:27017/info_skills'
	const app = express()
	await mongoose.connect(dbUrl);
	app.use(express.json());
	app.use(express.urlencoded({extended: true}));
	app.use(userRoutes)
	app.use(adminRoutes)
	app.use(publicRoutes)

	app.listen('3005', () => {
		console.log('NodeJS running');
	})
	app.get('/', (req, res) => {
		res.json('Hello World')
	})
	app.post('/', (req, res) => {
		const {username, email, password} = req.body;
		console.log(req.body)
		return res.json(username);
	})

}
