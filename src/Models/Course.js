const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	platform: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required:true,
	},
	description: {
		type: String,
		required:true,
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	skills: [
		{
			type: mongoose.Types.ObjectId,
			ref: "Skill"
		}
	]
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
