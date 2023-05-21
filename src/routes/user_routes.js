const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('./../Models/User')
const hashPassword = require('./../helpers/hash_password')
const authMiddleware = require('./../middlewares/auth_middleware')


router.post('/login', async (req, res) => {
	const {username, password} = req.body;
	const existingUser = await User.findOne({username});
	try {
		if (existingUser) {

			const isPasswordMatch = bcrypt.compare(password, existingUser.password)
			if (isPasswordMatch) {
				const token = jwt.sign({userId: existingUser._id}, 'some-private-key', {expiresIn: '1h'})
				return res.json({token: token})
			}
			else {
				return res.status(401).json({error: 'Invalid Credentials'})
			}


		}
		return res.status(401).json({error: 'Invalid Credentials'})
	}
	catch (error) {
		return res.status(500).json({error: 'Internal Server Error'})
	}


})

router.post('/register', async (req, res) => {
	const {username, email, password} = req.body;

	// Check if the email is already registered
	const existingUser = await User.findOne({username});

	if (existingUser) {
		if (existingUser.username == username || existingUser.email == email) {
			return res.status(400).json({error: 'Email already exists'});
		}
	}

	// Hash the password
	try {

		const hashedPassword = await hashPassword(password)
		const newUser = new User({username, email, password: hashedPassword});
		const savedUser = await newUser.save();
		return res.json(savedUser);

	} catch (err) {
		return res.status(500).json('Internal Server Error')
	}
});
module.exports = router
