const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
	platform: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	status: {
		type: String,
		required: true
	}
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
