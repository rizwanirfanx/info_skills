const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const validateEmail = function (email) {
	// Regular expression for email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		min: 3,
		max: 30
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: [validateEmail, 'Please enter a valid email address']
	},
	age: {
		type: Number,
		min: 18,
		max: 100
	},
	role: {
		type: String,
		enum: ['user', 'admin'],
		default: 'user'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
