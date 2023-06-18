const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
	name: String,
	slug: {
		type: String,
		required: true,
	},
	description: String,
	createdAt: {
		type: Date,
		default: Date.now
	},
	courses: [
		{
			type: mongoose.Types.ObjectId,
			ref : "Course"
		}
	]

});

const skillModel = mongoose.model('Skill', skillSchema);


module.exports = skillModel;

