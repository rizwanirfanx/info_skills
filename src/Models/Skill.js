const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
	name: String,
	description: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	courses: [
		{
			type: mongoose.Types.ObjectId,
			ref : "courses"
		}
	]

});

const skillModel = mongoose.model('Skill', skillSchema);


module.exports = skillModel;

